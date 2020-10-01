<template>
  <div class="blog-form">
    <v-container>
      <v-row justify="center">
        <h1>Create Blog</h1>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Title" outlined dense></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="9" md="8">
          <v-combobox
            multiple
            label="Tags"
            append-icon
            chips
            outlined
            dense
            small-chips
            deletable-chips
            class="tag-input"
            :search-input.sync="search"
            @keyup.tab="updateTags"
            @paste="updateTags"
          >
          </v-combobox>
        </v-col>
        <v-col cols="12" lg="3" md="4">
          <v-btn raised dark class="blue-grey">Cover Image</v-btn>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
          />
          <v-btn raised class="primary ml-6">Publish</v-btn>
        </v-col>
      </v-row>
      <mark-down class="markdown"></mark-down>
    </v-container>
    <footer-app></footer-app>
  </div>
</template>

<script>
import MarkDown from '@/components/blog/MarkDown.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    MarkDown,
    FooterApp
  },
  data: () => ({
    search: ''
  }),
  methods: {
    updateTags() {
      this.$nextTick(() => {
        this.select.push(...this.search.split(','));
        this.$nextTick(() => {
          this.search = '';
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-form {
  .col-12 {
    height: 75px;
  }
  .markdown {
    margin-top: 15px;
  }
}
</style>
