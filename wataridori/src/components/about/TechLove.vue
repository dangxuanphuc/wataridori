<template>
  <div>
    <title-about :title="'I love'"></title-about>
    <v-card outlined class="card-img">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="5" sm="6">
            <v-row justify="center">
              <v-col cols="4" v-for="(logo, index) in images" :key="index">
                <v-img :src="logo" contain height="150px" width="150px"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import TitleAbout from './TitleAbout.vue';

export default {
  components: {
    TitleAbout
  },
  data: () => ({
    images: [
      'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fvue.png?alt=media&token=be32b742-7ce1-4aee-819a-b59454b66e69',
      'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Flinux.png?alt=media&token=86bce2c3-cdbf-4c0c-a425-7eb9408bbff1',
      'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fdocker.png?alt=media&token=de9fbbf9-c3e8-454e-b1e2-929e4950d5ee'
    ]
  })
};
</script>

<style lang="scss" scoped>
.card-img {
  background: transparent;
  border: none;
}
</style>
