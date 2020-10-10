<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(post, index) in posts" :key="index">
      <div class="artical">
        <div class="main-image">
          <v-img :src="post.imageUrl" class="img"></v-img>
        </div>
        <div class="post-info">
          <h1 class="title-post">
            {{ post.title }}
          </h1>
          <div class="post-date">{{ post.date | date }}</div>
        </div>
        <a :href="post.id" class="link"></a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 2500
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }),
  computed: {
    posts() {
      return this.$store.getters.loadAllPosts;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~swiper/swiper.scss';
.artical {
  position: relative;
  display: block;
  opacity: 1;
  margin-bottom: 15px;
  transition: 0.3s;
  .main-image {
    overflow: hidden;
    > .img {
      width: 100%;
      opacity: 1;
      display: block;
    }
  }
  .post-info {
    padding-top: 10px;
    text-align: left;
    text-transform: uppercase;
    > .title-post {
      color: var(--v-titlePost-base);
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .post-date {
      color: var(--v-dateColor-base);
      font-size: 12px;
      display: block;
    }
  }
  .link {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    z-index: 3;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    opacity: 0.7;
  }
}
</style>
