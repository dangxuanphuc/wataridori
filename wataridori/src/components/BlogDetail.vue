<template>
  <v-container class="box-detail">
    <v-row>
      <v-col cols="12" md="8">
        <blog-content :blogClassName="'detail-block'"></blog-content>
        <similar-post></similar-post>
      </v-col>
      <v-col cols="12" md="4">
        <side-bar></side-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogContent from '@/components/BlogContent.vue';
import SimilarPost from '@/components/SimilarPost.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    BlogContent,
    SimilarPost,
    SideBar
  }
};
</script>

<style lang="scss" scoped>
.box-detail {
  margin-top: 20px;
}
</style>
