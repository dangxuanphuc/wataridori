<template>
  <div>
    <title-navigation :title="'Contact me'"></title-navigation>
    <feed-back></feed-back>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import FeedBack from '@/components/FeedBack.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    FeedBack,
    FooterApp
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
