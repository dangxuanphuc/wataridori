<template>
  <div class="container">
    <masonry
      :cols="{ default: 3, 1262: 2, 662: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <div v-for="(post, index) in posts" :key="index">
        <v-card outlined class="review-block">
          <header>
            <v-img :src="post.imageUrl" aspect-ratio="1.8"></v-img>
          </header>
          <div class="subtitle">
            <h1>
              <router-link :to="'posts/' + post.id">
                {{ post.title }}
              </router-link>
            </h1>
            <div class="date-author">
              <span class="date-submit">{{ post.date | date }}</span>
              <span class="author" v-once>{{ author }}</span>
            </div>
          </div>
          <div
            class="contents post-body"
            :inner-html.prop="post.content | truncate(700, '...')"
          ></div>
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
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-share-fill mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
                    />
                  </svg>
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
  name: 'PostReview',
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
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  },
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
      table {
        border-collapse: collapse;
      }
      table,
      th,
      td {
        border: 1px solid #969696;
        padding: 4px;
      }
      code {
        background-color: transparent !important;
      }
      pre {
        border: 1px solid #bfbfbf;
        overflow-y: hidden;
        overflow: visible;
        overflow-x: auto;
        padding: 0 10px;
        border-radius: 4px;
        &::-webkit-scrollbar {
          height: 7px;
        }
      }
      a {
        color: #26c6da;
        text-decoration: none;
      }
      img {
        width: 100%;
      }
      img.emoticon {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
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
