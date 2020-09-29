<template>
  <div>
    <section class="popular-post p-30 title-header">
      <title-side-bar :title="'You might also like'"></title-side-bar>
      <slide-similar-post></slide-similar-post>
    </section>
  </div>
</template>

<script>
import TitleSideBar from './TitleSideBar.vue';
import SlideSimilarPost from './SlideSimilarPost.vue';

export default {
  components: {
    TitleSideBar,
    SlideSimilarPost
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.p-30 {
  background: #eee;
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
