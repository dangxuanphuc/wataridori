<template>
  <v-container>
    <v-card outlined class="card-info py-5">
      <v-row>
        <v-col cols="12">
          <v-row class="mb-4 text-xs-center" justify="center">
            <v-col
              cols="12"
              class="col-lg-2 offset-lg-1 col-md-3 col-sm-4 offset-sm-1 col-xs-12"
            >
              <v-avatar size="160">
                <v-img src="avatar.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <h3 class="admin-name mb-2">{{ phucdx }}</h3>
              <p>{{ description }}</p>
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <title-about :title="'I love'"></title-about>
      <v-card outlined class="card-img">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="5" sm="6">
              <v-row justify="center">
                <v-col cols="4" v-for="(logo, index) in images" :key="index">
                  <v-img
                    :src="logo"
                    contain
                    height="150px"
                    width="150px"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <title-about :title="'Education & Work'"></title-about>
      <time-line></time-line>
      <title-about :title="'Skills'"></title-about>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <progress-bar-circle
              :skill="'Vietnamese'"
              :percentNumber="100"
            ></progress-bar-circle>
          </v-col>
          <v-col cols="12" md="4">
            <progress-bar-circle
              :skill="'Japanese'"
              :percentNumber="30"
            ></progress-bar-circle>
          </v-col>
          <v-col cols="12" md="4">
            <progress-bar-circle
              :skill="'English'"
              :percentNumber="50"
            ></progress-bar-circle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <progress-bar :skill="'Ruby'" :percentNumber="55"></progress-bar>
          </v-col>
          <v-col cols="12" md="6">
            <progress-bar :skill="'VueJS'" :percentNumber="35"></progress-bar>
          </v-col>
          <v-col cols="12" md="6">
            <progress-bar :skill="'CSS'" :percentNumber="75"></progress-bar>
          </v-col>
          <v-col cols="12" md="6">
            <progress-bar
              :skill="'Database'"
              :percentNumber="45"
            ></progress-bar>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import TitleAbout from './TitleAbout.vue';
import TimeLine from './TimeLine.vue';
import ProgressBar from './ProgressBar.vue';
import ProgressBarCircle from './ProgressBarCircle.vue';

export default {
  components: {
    TitleAbout,
    TimeLine,
    ProgressBar,
    ProgressBarCircle
  },
  data: () => ({
    phucdx: 'Đặng Xuân Phúc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    socials: [
      {
        title: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://facebook.com/wataridori.natsumi/',
        color: '#3b5998'
      },
      {
        title: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/wataridori.natsumi/',
        color: '#833ab4'
      },
      {
        title: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com/phucdx98/',
        color: '#1da1f2'
      },
      {
        title: 'Github',
        icon: 'mdi-github',
        link: 'https://github.com/dangxuanphuc/',
        color: '#000'
      }
    ],
    images: ['vue.png', 'linux.png', 'docker.png']
  })
};
</script>

<style lang="scss" scoped>
.card-info {
  background: #eee;
  .card-img {
    background: transparent;
    border: none;
  }
  .admin-name {
    color: #31708f;
    font-size: 28px;
    font-weight: 400;
  }
}
@media screen and (max-width: 600px) {
  .text-xs-center {
    text-align: center;
  }
}
</style>
