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
    images: ['vue.png', 'linux.png', 'docker.png']
  })
};
</script>

<style lang="scss" scoped>
.card-img {
  background: transparent;
  border: none;
}
</style>
