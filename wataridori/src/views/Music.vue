<template>
  <div>
    <title-navigation :title="'Listen to music playlists'"></title-navigation>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/shared/TitleNavigation.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    FooterApp
  }
};
</script>

<style lang="scss" scoped></style>
