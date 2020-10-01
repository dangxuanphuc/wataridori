<template>
  <div>
    <v-card outlined :class="blogClassName">
      <header>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          aspect-ratio="1.8"
        ></v-img>
      </header>
      <div class="subtitle">
        <div class="category">
          <a href="#">Japanese</a>
        </div>
        <h1>
          <a href="#">
            Siêu tân tinh sao lùn đen có thể khiến vũ trụ 'chết' trong tương
            lai?
          </a>
        </h1>
        <div class="date-author">
          <span class="date-submit">December 12, 2020</span>
          <span class="author">by Dang Xuan Phuc</span>
        </div>
      </div>
      <div class="contents blog-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eius quo
        quos quisquam harum molestiae velit commodi, minus inventore delectus?
        Vero laboriosam, quia repudiandae provident laborum, ipsa vel delectus
        dolor, id eaque obcaecati. Aperiam, magni sunt dolore inventore,
        architecto veniam, saepe ab quisquam ut quod reiciendis blanditiis
        deserunt molestiae recusandae atque voluptatem laboriosam quos quas
        aspernatur labore minus eius quibusdam quidem. Aliquam distinctio qui
        doloribus sint, esse harum aliquid blanditiis cumque adipisci nisi
        recusandae necessitatibus! Libero cupiditate consequuntur a, temporibus
        ipsum eveniet sint blanditiis, et perferendis saepe tenetur quam est
        quasi dolor voluptatibus doloribus explicabo minus nihil veritatis.
        Blanditiis, corrupti.
      </div>
      <div class="text-center">
        <v-btn text outlined class="read-more">Read more</v-btn>
      </div>
      <v-card-actions class="footer-card">
        <v-btn color="gray" text class="comment-btn">
          5 comments
        </v-btn>
        <div class="tag-btn">
          <a href="#">japanese</a>
        </div>
        <v-spacer></v-spacer>
        <v-btn text outlined small class="share-btn">
          <v-icon small>mdi-export-variant</v-icon>
          Share
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['blogClassName']
};
</script>

<style lang="scss" scoped>
.review-block,
.detail-block {
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
    .category {
      font-weight: 400;
      font-size: 16px;
      a {
        color: inherit;
        text-transform: none;
        text-decoration: none;
      }
    }
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
        margin: 0 7px;
      }
    }
  }
  .contents {
    margin-bottom: 20px;
  }
  .blog-body {
    font-family: 'Noto Serif';
    color: #333;
    font-size: 16px;
    line-height: 1.6;
    word-wrap: break-word;
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
  .footer-card {
    padding: 0;
    .tag-btn {
      display: none;
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
.detail-block {
  border: none;
  .read-more {
    display: none;
  }
  .footer-card {
    .comment-btn {
      display: none;
    }
    .tag-btn {
      display: block;
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
        transition: 0.5s;
        &:hover {
          background: #e53935;
          color: white;
        }
      }
    }
  }
  &:hover {
    box-shadow: none;
    .v-image {
      opacity: 1;
    }
  }
}
</style>
