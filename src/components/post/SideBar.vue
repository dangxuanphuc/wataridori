<template>
  <div>
    <section class="about-me p-30 title-header">
      <title-side-bar :title="'About me'"></title-side-bar>
      <div class="text-center">
        <img
          src="https://res.cloudinary.com/phucdx/image/upload/v1615006143/wataridori/images/avatar_yvycdo.jpg"
        />
      </div>
      <p v-once>{{ description }}</p>
      <div class="text-center">
        <v-btn text outlined class="read-more" to="/about-me">Read more</v-btn>
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
        <div v-for="(post, index) in posts" :key="index" class="artical">
          <div class="main-image">
            <v-img :src="post.imageUrl" class="img"></v-img>
          </div>
          <div class="post-info">
            <h1 class="title-post">
              {{ post.title }}
            </h1>
            <div class="post-date">
              {{ post.date | moment('ll') }}
            </div>
          </div>
          <router-link :to="post.id" class="link"></router-link>
        </div>
      </div>
    </section>
    <section class="tag-box p-30 title-header">
      <title-side-bar :title="'Tags'"></title-side-bar>
      <div class="tag-content">
        <a
          v-for="(tag, index) in tags"
          :key="index"
          href="#"
          class="tag-link"
          >{{ tag }}</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import TitleSideBar from './TitleSideBar.vue';

export default {
  name: 'SideBar',
  components: {
    TitleSideBar
  },
  data: () => ({
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem in rem culpa reprehenderit amet.',
    socials: [
      {
        title: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://facebook.com/wataridori.natsumi/',
        color: 'var(--v-facebookColor-base)'
      },
      {
        title: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/wataridori.natsumi/',
        color: 'var(--v-instagramColor-base)'
      },
      {
        title: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com/phucdx98/',
        color: 'var(--v-twitterColor-base)'
      },
      {
        title: 'Github',
        icon: 'mdi-github',
        link: 'https://github.com/dangxuanphuc/',
        color: 'var(--v-githubColor-base)'
      }
    ]
  }),
  computed: {
    posts() {
      return this.$store.getters.popularPosts;
    },
    tags() {
      return this.$store.getters.loadTags;
    }
  }
};
</script>

<style lang="scss" scoped>
.p-30 {
  background: var(--v-backgroundCard-base);
  padding: 30px 30px 20px;
  margin-bottom: 30px;
  border-radius: 3px;
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
    color: var(--v-readmoreColor-base);
    border: 1px solid var(--v-readmoreColor-base) !important;
    margin-bottom: 10px;
    transition: 0.5s;
    &:hover {
      background: var(--v-readmoreColor-base);
      color: #fff;
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
          height: 150px;
          opacity: 1;
        }
      }
      .post-info {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        z-index: 2;
        transform: translate(0, -50%);
        padding: 0 15px;
        text-align: center;
        text-transform: uppercase;
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
        background-color: #000;
        opacity: 0.5;
        filter: alpha(opacity=50);
        transition: 0.3s;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        &::before {
          opacity: 0.15;
          filter: alpha(opacity=15);
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .popular-post {
    .post-list {
      > .artical {
        .main-image {
          > .img {
            height: 150px !important;
          }
        }
      }
    }
  }
}
.tag-box {
  background: var(--v-backgroundCard-base);
  .tag-content {
    margin: -5px;
    > a {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid var(--v-tagColor-base);
      margin: 5px;
      background: transparent;
      color: var(--v-tagColor-base);
      font-weight: normal;
      font-size: 14px !important;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        background: #26a69a;
        color: #fff;
      }
    }
  }
}
</style>
