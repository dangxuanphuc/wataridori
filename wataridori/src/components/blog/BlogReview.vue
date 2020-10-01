<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <blog-content :blogClassName="'review-block'"></blog-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogContent from './BlogContent.vue';

export default {
  components: {
    BlogContent
  }
};
</script>

<style lang="scss" scoped></style>
