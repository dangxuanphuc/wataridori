<template>
  <div>
    <section class="popular-post p-30 title-header">
      <title-side-bar :title="titleSideBar"></title-side-bar>
      <slide-similar-post></slide-similar-post>
    </section>
  </div>
</template>

<script>
import TitleSideBar from './TitleSideBar.vue';
import SlideSimilarPost from './SlideSimilarPost.vue';

export default {
  data: () => ({
    titleSideBar: 'You might also like'
  }),
  components: {
    TitleSideBar,
    SlideSimilarPost
  }
};
</script>

<style lang="scss" scoped>
.p-30 {
  background: var(--v-backgroundCard-base);
  padding: 30px;
  margin: 30px 0;
  border-radius: 3px;
}
.title-header {
  position: relative;
  font-size: 14px;
  z-index: 2;
}
</style>
