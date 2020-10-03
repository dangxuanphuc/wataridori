<template>
  <div>
    <div v-if="loading" class="text-center" style="margin-top: 100px">
      <v-progress-circular
        indeterminate
        color="primary"
        :width="7"
        :size="70"
      ></v-progress-circular>
    </div>
    <div v-else>
      <title-navigation :title="'My Blog - Recent posts'"></title-navigation>
      <post-review></post-review>
      <footer-app></footer-app>
    </div>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import PostReview from '@/components/post/PostReview.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    PostReview,
    FooterApp
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped></style>
