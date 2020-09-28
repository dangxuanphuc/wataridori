<template>
  <div>
    <section class="about-me p-30 title-header">
      <title-side-bar :title="'About me'"></title-side-bar>
      <div class="text-center">
        <img src="avatar.jpg" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem in
        rem culpa reprehenderit amet.
      </p>
      <div class="text-center">
        <v-btn text outlined class="read-more">Read more</v-btn>
      </div>
    </section>
    <section class="follow-me p-30 title-header">
      <title-side-bar :title="'Follow me'"></title-side-bar>
      <div class="text-center">
        <v-btn
          v-for="(social, index) in socials"
          :key="index"
          :color="social.color"
          :href="social.link"
          target="_blank"
          icon
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </section>
    <section class="popular-post p-30 title-header">
      <title-side-bar :title="'Popular Posts'"></title-side-bar>
      <div class="post-list">
        <div class="artical">
          <div class="main-image">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
        <div class="artical">
          <div class="main-image">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
        <div class="artical">
          <div class="main-image">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
      </div>
    </section>
    <section class="tag-box p-30 title-header">
      <title-side-bar :title="'Tags'"></title-side-bar>
      <div class="tag-content">
        <a href="#" class="tag-link">japanese</a>
        <a href="#" class="tag-link">tag</a>
        <a href="#" class="tag-link">hello</a>
        <a href="#" class="tag-link">việt nam</a>
        <a href="#" class="tag-link">thiên văn</a>
      </div>
    </section>
  </div>
</template>

<script>
import TitleSideBar from './TitleSideBar.vue';

export default {
  components: {
    TitleSideBar
  },
  data: () => ({
    socials: [
      {
        title: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://facebook.com/wataridori.natsumi/',
        color: '#3b5998'
      },
      {
        title: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/wataridori.natsumi/',
        color: '#833ab4'
      },
      {
        title: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com/phucdx98/',
        color: '#1da1f2'
      },
      {
        title: 'Github',
        icon: 'mdi-github',
        link: 'https://github.com/dangxuanphuc/',
        color: '#000'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.p-30 {
  padding: 30px 30px 20px;
  margin-bottom: 30px;
  background: #eee;
}
.title-header {
  position: relative;
  font-size: 14px;
  z-index: 2;
}
.about-me {
  img {
    max-width: 160px;
    border-radius: 50%;
  }
  .read-more {
    color: #e53935;
    border: 2px solid #e53935 !important;
    margin-bottom: 10px;
    transition: 0.5s;
    &:hover {
      background: #e53935;
      color: white;
    }
  }
}
.popular-post {
  .post-list {
    > .artical {
      position: relative;
      display: block;
      opacity: 1;
      filter: alpha(opacity=100);
      margin-bottom: 15px;
      .main-image {
        overflow: hidden;
        > .img {
          width: 100%;
          opacity: 1;
        }
      }
      .post-info {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        z-index: 2;
        transform: translate(0, -50%);
        padding: 0 15px;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        > .title-post {
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 5px;
        }
        .post-date {
          font-size: 14px;
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
      &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        z-index: 1;
        background: #000;
        opacity: 0.5;
        filter: alpha(opacity=50);
        transition: 0.3s;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        &::before {
          opacity: 0.35;
          filter: alpha(opacity=35);
        }
      }
    }
  }
}
.tag-box {
  background: #eee;
  .tag-content {
    margin: -5px;
    > a {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #1c1c1c;
      margin: 5px;
      background: transparent;
      color: #1c1c1c;
      font-weight: normal;
      text-transform: capitalize;
      font-size: 14px !important;
      text-decoration: none;
      &:hover {
        background: #e53935;
        color: white;
      }
    }
  }
}
</style>
