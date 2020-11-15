<template>
  <div class="post-form">
    <v-container>
      <v-row justify="center">
        <h1>Create new Post</h1>
      </v-row>
      <v-row>
        <v-col>
          <v-form @submit.prevent="onCreatePost">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="9" md="8">
                <v-combobox
                  name="tags"
                  label="Tags"
                  id="tags"
                  v-model="tags"
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
              <v-col cols="12" lg="3" md="4">
                <v-btn raised dark class="blue-grey" @click="onPickFile">
                  Cover Image
                </v-btn>
                <input
                  type="file"
                  style="display: none"
                  ref="fileInput"
                  accept="image/*"
                  @change="onFilePicked"
                />
                <v-img
                  :src="imageUrl"
                  width="200"
                  style="display: none;"
                ></v-img>
                <v-btn
                  type="submit"
                  raised
                  class="primary ml-6"
                  :disabled="!formIsValid"
                >
                  Publish
                </v-btn>
              </v-col>
            </v-row>
            <div class="markdown-editor">
              <mavon-editor
                :toolbars="markdownOption"
                :language="'en'"
                :placeholder="'Type your content...'"
                @change="change"
                v-model="content"
              />
            </div>
            <v-date-picker
              v-model="date"
              style="display: none;"
            ></v-date-picker>
            <v-time-picker
              v-model="time"
              format="24hr"
              style="display: none;"
            ></v-time-picker>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import fb from '@/firebase.js';
import emojson from '@/assets/vender/emoticon.json';

export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      tags: '',
      imageUrl: '',
      content: '',
      contentMD: '',
      html: '',
      emoticons: emojson,
      date: new Date().toISOString().substr(0, 10),
      time: new Date(),
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
      var keyNotOverlap = keyArr.filter(el => {
        return arr.includes(el);
      });
      var srcArr = keyArr.filter(el => {
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
    onCreatePost() {
      if (!this.formIsValid) {
        return;
      }
      const postData = {
        title: this.title,
        tags: this.tags,
        imageUrl: this.imageUrl,
        content: this.replaceToEmoticon(this.html),
        contentMD: this.content,
        date: this.submittableDateTime
      };
      this.$store.dispatch('createPost', postData);
      this.$router.push('/');
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = fb
          .storage()
          .ref('posts/' + Math.random() + '_' + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          'state_changed',
          snapshot => {
            console.log(snapshot);
          },
          error => {
            console.log(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.imageUrl = downloadURL;
            });
          }
        );
      }
    },
    change(value, render) {
      this.html = render;
    }
  },
  computed: {
    formIsValid() {
      return (
        this.title !== '' &&
        this.tags !== '' &&
        this.imageUrl !== '' &&
        this.content !== ''
      );
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === 'string') {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    }
  }
};
</script>

<style lang="scss" scoped>
.post-form {
  .col-12 {
    height: 75px;
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
}
</style>
