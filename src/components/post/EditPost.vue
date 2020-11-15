<template>
  <v-dialog persistent v-model="editDialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed outlined small v-on="on" v-bind="attrs" class="edit-btn">
        <svg
          width="1.6em"
          height="1.6em"
          viewBox="0 0 16 16"
          class="bi bi-pencil-square"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col xs="12">
            <v-card-title>Edit Post</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col xs="12">
            <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="editTitle"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-combobox
              name="tags"
              label="Tags"
              id="tags"
              v-model="editTags"
              multiple
              append-icon
              chips
              outlined
              dense
              small-chips
              deletable-chips
              class="tag-input"
            >
            </v-combobox>
          </v-col>
        </v-row>
        <div class="markdown-editor">
          <mavon-editor
            :toolbars="markdownOption"
            :language="'en'"
            :placeholder="'Type your content...'"
            @change="change"
            v-model="editContent"
          />
        </div>
        <v-divider></v-divider>
        <v-row>
          <v-col xs="12">
            <v-btn
              outlined
              class="cyan lighten-5 mr-2"
              @click="editDialog = false"
              >Close</v-btn
            >
            <v-btn outlined class="cyan accent-2" @click="onSaveChanges"
              >Save</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import emojson from '@/assets/vender/emoticon.json';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export default {
  name: 'EditPost',
  props: ['post'],
  data() {
    return {
      editDialog: false,
      editTitle: this.post.title,
      editTags: this.post.tags,
      editContent: this.post.contentMD,
      editHtml: '',
      emoticons: emojson,
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        undo: true,
        redo: true,
        trash: true,
        save: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true
      }
    };
  },
  methods: {
    getKeyEmoji(postContent) {
      const regExp = /\(.*?\)/g;
      const matches = postContent.match(regExp);
      return matches;
    },
    replaceToEmoticon(postContent) {
      var emojiArray = JSON.parse(JSON.stringify(this.emoticons));
      var newContent = postContent;
      var keyArr = this.getKeyEmoji(postContent);
      var arr = [];
      for (let i in emojiArray) {
        arr.push(emojiArray[i]['key']);
      }
      var keyNotOverlap = keyArr.filter(function(el) {
        return arr.includes(el);
      });
      var srcArr = keyArr.filter(function(el) {
        return arr.includes(el);
      });
      for (let i in emojiArray) {
        for (let j in keyNotOverlap) {
          if (keyNotOverlap[j] === emojiArray[i]['key']) {
            srcArr[j] = emojiArray[i]['src'];
          }
        }
      }
      for (let i in keyNotOverlap) {
        newContent = newContent.replace(
          keyNotOverlap[i],
          "<img src='" +
            srcArr[i] +
            "' title='" +
            keyNotOverlap[i] +
            "' alt='" +
            keyNotOverlap[i] +
            "' class='emoticon' />"
        );
      }
      return newContent;
    },
    onSaveChanges() {
      if (this.editTitle.trim() === '' || this.editContent.trim() === '') {
        return;
      }
      this.editDialog = false;
      this.$store.dispatch('updatePostData', {
        id: this.post.id,
        title: this.editTitle,
        tags: this.editTags,
        content: this.replaceToEmoticon(this.editHtml),
        contentMD: this.editContent
      });
      Toast.fire({
        icon: 'success',
        title: 'Post updated successfully!'
      });
    },
    change(value, render) {
      this.editHtml = render;
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-btn {
  border: 1px solid var(--v-editBtnColor-base) !important;
  color: var(--v-editBtnColor-base);
  &:hover {
    background: var(--v-editBtnColor-base);
    color: #fff;
  }
}
.markdown-editor {
  width: 100%;
  height: 100%;
  margin-top: 15px;
  .markdown-body {
    box-shadow: none !important;
    border: 1px solid #9b9b9b;
    z-index: 0;
  }
}
</style>
