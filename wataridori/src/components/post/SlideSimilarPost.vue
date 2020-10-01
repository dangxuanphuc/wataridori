<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="artical">
        <div class="main-image">
          <v-img
            src="https://picsum.photos/500/300?image=10"
            class="img"
          ></v-img>
        </div>
        <div class="post-info">
          <h1 class="title-post">
            Siêu tân tinh sao lùn đen có thể khiến vũ trụ 'chết' trong tương
            lai?
          </h1>
          <div class="post-date">December 12, 2016</div>
        </div>
        <a href="#" class="link"></a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="artical">
        <div class="main-image">
          <v-img
            src="https://picsum.photos/500/300?image=30"
            class="img"
          ></v-img>
        </div>
        <div class="post-info">
          <h1 class="title-post">
            Siêu tân tinh sao lùn đen có thể khiến vũ trụ 'chết' trong tương
            lai?
          </h1>
          <div class="post-date">December 12, 2016</div>
        </div>
        <a href="#" class="link"></a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="artical">
        <div class="main-image">
          <v-img
            src="https://picsum.photos/500/300?image=50"
            class="img"
          ></v-img>
        </div>
        <div class="post-info">
          <h1 class="title-post">
            Siêu tân tinh sao lùn đen có thể khiến vũ trụ 'chết' trong tương
            lai?
          </h1>
          <div class="post-date">December 12, 2016</div>
        </div>
        <a href="#" class="link"></a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="artical">
        <div class="main-image">
          <v-img
            src="https://picsum.photos/500/300?image=10"
            class="img"
          ></v-img>
        </div>
        <div class="post-info">
          <h1 class="title-post">
            Siêu tân tinh sao lùn đen có thể khiến vũ trụ 'chết' trong tương
            lai?
          </h1>
          <div class="post-date">December 12, 2016</div>
        </div>
        <a href="#" class="link"></a>
      </div>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
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
      color: #000;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .post-date {
      color: #333;
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
    opacity: 0.65;
  }
}
</style>
