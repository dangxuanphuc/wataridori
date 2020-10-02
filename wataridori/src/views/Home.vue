<template>
  <div>
    <v-row>
      <v-col xs="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <div v-if="!loading">
      <title-navigation :title="'My Blog - Recent posts'"></title-navigation>
      <post-review></post-review>
    </div>
    <footer-app></footer-app>
  </div>
</template>

<script>
import TitleNavigation from '@/components/TitleNavigation.vue';
import PostReview from '@/components/post/PostReview.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
  components: {
    TitleNavigation,
    PostReview,
    FooterApp
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped></style>
