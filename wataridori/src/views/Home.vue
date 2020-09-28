<template>
  <div>
    <title-navigation :title="'My Blog - Recent posts'"></title-navigation>
    <blog-review></blog-review>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import BlogReview from '@/components/BlogReview.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    BlogReview,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
