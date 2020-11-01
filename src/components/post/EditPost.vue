<template>
  <v-dialog persistent v-model="editDialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed outlined small v-on="on" v-bind="attrs" class="editBtn">
        <v-icon medium>mdi-square-edit-outline</v-icon>
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
import emojson from '@/assets/emoticon.json';

export default {
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
    },
    change(value, render) {
      this.editHtml = render;
    }
  }
};
</script>

<style lang="scss" scoped>
.editBtn {
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
