<template>
  <div class="container">
    <masonry
      :cols="{ default: 3, 1262: 2, 662: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <div v-for="(post, index) in posts" :key="index">
        <v-card
          outlined
          class="review-block"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <header>
            <v-img :src="post.imageUrl" aspect-ratio="1.8"></v-img>
          </header>
          <div class="subtitle">
            <h1>
              <a :href="'posts/' + post.id">
                {{ post.title }}
              </a>
            </h1>
            <div class="date-author">
              <span class="date-submit">{{ post.date | date }}</span>
              <span class="author">{{ author }}</span>
            </div>
          </div>
          <div class="contents post-body" v-html="post.content"></div>
          <v-card-actions class="footer-card">
            <v-btn
              text
              outlined
              small
              class="read-more"
              :to="'posts/' + post.id"
            >
              Read more
            </v-btn>
            <v-spacer></v-spacer>
            <v-menu
              top
              :close-on-content-click="closeOnContentClick"
              :close-on-click="closeOnClick"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  depressed
                  text
                  small
                  v-bind="attrs"
                  v-on="on"
                  class="share-btn"
                >
                  <v-icon small>mdi-export-variant</v-icon>
                  Share
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(social, index) in socials"
                  :key="index"
                  @click="shareSocial"
                >
                  <share-network
                    :network="social.name"
                    title=""
                    :url="'facebook.com/posts/' + post.id"
                  >
                    <v-icon :color="social.color" class="mr-2">
                      {{ social.icon }}
                    </v-icon>
                    <span class="text-capitalize">{{ social.name }}</span>
                  </share-network>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </div>
    </masonry>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data: () => ({
    author: 'by Dang Xuan Phuc',
    closeOnClick: true,
    closeOnContentClick: true,
    socials: [
      { name: 'facebook', icon: 'mdi-facebook', color: '#01579b' },
      { name: 'twitter', icon: 'mdi-twitter', color: '#1da1f2' }
    ]
  }),
  methods: {
    shareSocial() {
      console.log('Share social button');
    }
  },
  computed: {
    posts() {
      return this.$store.getters.loadAllPosts;
    }
  }
};
</script>

<style lang="scss" scoped>
.review-block {
  background: var(--v-backgroundCard-base);
  padding: 30px 30px 15px;
  margin-bottom: 30px;
  transition: 0.3s;
  > header {
    margin: -30px -30px 10px;
    .v-image {
      width: 100%;
      transition: 0.3s;
    }
  }
  .subtitle {
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
    h1 {
      font-family: 'Roboto Slab', 'Noto Serif', 'Helvetica Neue', Helvetica,
        Arial, sans-serif;
      font-weight: 400;
      font-size: 32px;
      text-transform: none;
      line-height: 1.1;
      margin-bottom: 5px;
      color: var(--v-titlePost-base);
      a {
        color: inherit;
        text-decoration: none;
        transition: 0.3s;
        font-size: 28px;
        font-weight: 400;
        &:hover {
          color: var(--v-titlePostHover-base);
        }
      }
    }
    .date-author {
      color: var(--v-dateColor-base);
      * {
        font-size: 13px;
        margin: 0 5px;
      }
    }
  }
  .contents {
    margin-bottom: 20px;
  }
  .post-body {
    font-family: 'Noto Serif';
    color: var(--v-postTextColor-base);
    font-size: 16px;
    line-height: 1.6;
    &::v-deep {
      img {
        width: 100%;
      }
    }
  }
  .footer-card {
    padding: 0;
    .read-more {
      color: var(--v-readmoreColor-base);
      border: 1px solid var(--v-readmoreColor-base) !important;
      transition: 0.3s;
      &:hover {
        background: var(--v-readmoreColor-base);
        color: #fff;
      }
    }
    .share-btn {
      border: 1px solid var(--v-shareBtnColor-base) !important;
      color: var(--v-shareBtnColor-base);
      transition: 0.3s;
      &:hover {
        background: var(--v-shareBtnColor-base);
        color: #fff;
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px 0 var(--v-postShadow-base);
    .v-image {
      opacity: 0.8;
    }
  }
}
</style>
