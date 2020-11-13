<template>
  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
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
  name: 'TechLove',
  components: {
    TitleAbout
  },
  data: () => ({
    images: [
      'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/vue.png',
      'https://res.cloudinary.com/phucdx/image/upload/v1602212642/wataridori/images/linux.png',
      'https://res.cloudinary.com/phucdx/image/upload/v1602212643/wataridori/images/docker.png'
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
