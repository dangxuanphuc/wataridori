<template>
  <div>
    <div v-if="loading" class="text-center" style="margin-top: 20px">
      <v-progress-circular
        indeterminate
        color="#00897b"
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
import TitleNavigation from '@/components/shared/TitleNavigation.vue';
import PostReview from '@/components/post/PostReview.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  name: 'Home',
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
