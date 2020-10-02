<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="4" sm="6">
        <v-card outlined class="review-block">
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
          <div class="contents post-body">
            {{ post.content }}
          </div>
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
            <v-btn text outlined small class="share-btn">
              <v-icon small>mdi-export-variant</v-icon>
              Share
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    author: 'by Dang Xuan Phuc'
  }),
  computed: {
    posts() {
      return this.$store.getters.loadAllPosts;
    }
  }
};
</script>

<style lang="scss" scoped>
.review-block {
  padding: 30px 30px 15px;
  transition: 0.3s;
  background: #eee;
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
      a {
        color: inherit;
        text-decoration: none;
        transition: 0.3s;
        font-size: 28px;
        font-weight: 400;
        &:hover {
          color: #e53935;
        }
      }
    }
    .date-author {
      color: #777;
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
    color: #333;
    font-size: 16px;
    line-height: 1.6;
    word-wrap: break-word;
  }
  .footer-card {
    padding: 0;
    .read-more {
      color: #e53935;
      border: 2px solid #e53935 !important;
      transition: 0.5s;
      &:hover {
        background: #e53935;
        color: white;
      }
    }
    .share-btn {
      border: 1px solid #1976d2 !important;
      color: #1976d2;
      &:hover {
        background: #1976d2;
        color: white;
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    .v-image {
      opacity: 0.8;
    }
  }
}
</style>
