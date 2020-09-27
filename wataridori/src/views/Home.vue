<template>
  <div>
    <title-navigation :title="'My Blog - Recent posts'"></title-navigation>
    <blog-content></blog-content>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import BlogContent from '@/components/BlogContent.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    BlogContent,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
