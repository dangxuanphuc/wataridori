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
          <quill-editor
            class="editor"
            ref="myTextEditor"
            :options="editorOption"
            @change="onEditorChange"
            v-model="editContent"
          />
        </div>
        <v-date-picker
          v-model="editDate"
          style="display: none;"
        ></v-date-picker>
        <v-time-picker
          v-model="editTime"
          format="24hr"
          style="display: none;"
        ></v-time-picker>
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
import hljs from 'highlight.js';
import debounce from 'lodash/debounce';
import { quillEditor } from 'vue-quill-editor';
import { quillEmoji } from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';
import 'highlight.js/styles/tomorrow.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export default {
  props: ['post'],
  components: {
    quillEditor
  },
  data() {
    return {
      editDialog: false,
      editTitle: this.post.title,
      editTags: this.post.tags,
      editContent: this.post.content,
      editDate: new Date().toISOString().substr(0, 10),
      editTime: new Date(),
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
    };
  },
  methods: {
    onEditorChange: debounce(function(value) {
      this.content = value.html;
    }, 466),
    onSaveChanges() {
      if (this.editTitle.trim() === '' || this.editContent.trim() === '') {
        return;
      }
      this.editDialog = false;
      this.$store.dispatch('updatePostData', {
        id: this.post.id,
        title: this.editTitle,
        tags: this.editTags,
        content: this.editContent,
        date: this.editDateTime
      });
    }
  },
  computed: {
    editDateTime() {
      const date = new Date(this.editDate);
      if (typeof this.editTime === 'string') {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.editTime.getHours());
        date.setMinutes(this.editTime.getMinutes());
      }
      return date;
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
</style>
