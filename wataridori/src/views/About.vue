<template>
  <div>
    <title-navigation :title="'About me'"></title-navigation>
    <infor-me></infor-me>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import InforMe from '@/components/InforMe.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    InforMe,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
