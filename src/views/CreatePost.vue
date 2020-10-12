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
              <quill-editor
                class="editor"
                ref="myTextEditor"
                :options="editorOption"
                @change="onEditorChange"
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
import hljs from 'highlight.js';
import debounce from 'lodash/debounce';
import { quillEditor } from 'vue-quill-editor';
import { quillEmoji } from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';
import 'highlight.js/styles/tomorrow.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export default {
  components: {
    quillEditor
  },
  data: () => ({
    title: '',
    tags: '',
    imageUrl: '',
    content: '',
    date: new Date().toISOString().substr(0, 10),
    time: new Date(),
    image: null,
    editorOption: {
      placeholder: 'Type your post...',
      modules: {
        'emoji-toolbar': true,
        'emoji-shortname': true,
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image', 'emoji']
          ],
          handlers: {
            image: function() {
              quillEmoji.emit(this.quill.id);
            }
          }
        },
        syntax: {
          highlight: text => hljs.highlightAuto(text).value
        }
      }
    }
  }),
  methods: {
    onCreatePost() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return;
      }
      const postData = {
        title: this.title,
        tags: this.tags,
        image: this.image,
        content: this.content,
        date: this.submittableDateTime
      };
      this.$store.dispatch('createPost', postData);
      this.$router.push('/');
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    onEditorChange: debounce(function(value) {
      this.content = value.html;
    }, 466)
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
    },
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
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
    display: flex;
    height: 20rem;
    margin-top: 15px;
    $toolbar-height: 42px;
    .editor {
      width: 100%;
      height: 100%;
      padding-bottom: $toolbar-height;
    }
  }
}
</style>
