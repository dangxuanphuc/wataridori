<template>
  <div>
    <div class="text-center" v-if="loading" style="margin-top: 20px">
      <v-progress-circular
        indeterminate
        color="#00897b"
        :width="7"
        :size="70"
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-container class="box-detail">
        <v-row v-if="!loading">
          <v-col cols="12" md="8">
            <v-card v-if="post" outlined class="detail-block">
              <header>
                <v-img :src="post.imageUrl" aspect-ratio="1.8"></v-img>
              </header>
              <div class="subtitle">
                <h1>{{ post.title }}</h1>
                <div class="date-author">
                  <span class="date-submit">{{ post.date | date }}</span>
                  <span class="author">{{ author }}</span>
                </div>
              </div>
              <div class="contents post-body" v-html="post.content"></div>
              <v-card-actions class="footer-card">
                <div class="tag-btn">
                  <a href="#" v-for="(tag, index) in post.tags" :key="index">
                    {{ tag }}
                  </a>
                </div>
                <v-spacer></v-spacer>
                <v-btn text outlined small class="share-btn">
                  <v-icon small>mdi-export-variant</v-icon>
                  Share
                </v-btn>
              </v-card-actions>
            </v-card>
            <similar-post></similar-post>
          </v-col>
          <v-col cols="12" md="4">
            <side-bar></side-bar>
          </v-col>
        </v-row>
      </v-container>
      <footer-app></footer-app>
    </div>
  </div>
</template>

<script>
import SimilarPost from '@/components/post/SimilarPost.vue';
import SideBar from '@/components/post/SideBar.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  props: ['id'],
  components: {
    SimilarPost,
    SideBar,
    FooterApp
  },
  data: () => ({
    author: 'by Dang Xuan Phuc'
  }),
  computed: {
    post() {
      return this.$store.getters.loadPost(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-detail {
  margin-top: 10px;
  .detail-block {
    padding: 30px 30px 15px;
    transition: 0.3s;
    background: var(--v-backgroundCard-base);
    border: none;
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
        font-size: 36px;
        text-transform: none;
        line-height: 1.1;
        margin-bottom: 5px;
      }
      .date-author {
        color: var(--v-dateColor-base);
        * {
          margin: 0 7px;
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
      word-wrap: break-word;
    }
    .footer-card {
      padding: 0;
      .tag-btn {
        display: block;
        > a {
          display: inline-block;
          padding: 5px 10px;
          border: 1px solid var(--v-tagColor-base);
          margin: 5px;
          background: transparent;
          color: var(--v-tagColor-base);
          font-weight: normal;
          text-transform: capitalize;
          font-size: 14px !important;
          text-decoration: none;
          transition: 0.5s;
          &:hover {
            background: #26a69a;
            color: #fff;
          }
        }
      }
      .share-btn {
        border: 1px solid var(--v-shareBtnColor-base) !important;
        color: var(--v-shareBtnColor-base);
        &:hover {
          background: var(--v-shareBtnColor-base);
          color: #fff;
        }
      }
    }
  }
}
</style>
