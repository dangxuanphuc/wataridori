<template>
  <div class="markdown-editor">
    <quill-editor
      class="editor"
      ref="myTextEditor"
      :options="editorOption"
      @change="onEditorChange"
    />
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

export default {
  components: {
    quillEditor
  },
  data: () => ({
    editorOption: {
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
    onEditorChange: debounce(function(value) {
      this.content = value.html;
    }, 466)
  },
  computed: {
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
@import '~quill/dist/quill.snow.css';

.markdown-editor {
  display: flex;
  height: 20rem;
  $toolbar-height: 42px;
  .editor {
    width: 100%;
    height: 100%;
    padding-bottom: $toolbar-height;
  }
}
</style>
