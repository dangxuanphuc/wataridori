<template>
  <div>
    <title-navigation :title="'About me'"></title-navigation>
    <about-me></about-me>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import AboutMe from '@/components/AboutMe.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    AboutMe,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
