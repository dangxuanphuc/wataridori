<template>
  <div>
    <title-navigation :title="'About me'"></title-navigation>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
