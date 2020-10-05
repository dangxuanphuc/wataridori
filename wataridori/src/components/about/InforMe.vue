<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row class="mb-4 text-xs-center" justify="center">
          <v-col
            cols="12"
            class="col-lg-2 offset-lg-1 col-md-3 col-sm-4 offset-sm-1 col-xs-12"
          >
            <v-avatar size="160">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Favatar.jpg?alt=media&token=54410cc4-806b-4278-a8b8-d97273adfa90"
              ></v-img>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    phucdx: 'Đặng Xuân Phúc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    socials: [
      {
        title: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://facebook.com/wataridori.natsumi/',
        color: 'var(--v-facebookColor-base)'
      },
      {
        title: 'Instagram',
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/wataridori.natsumi/',
        color: 'var(--v-instagramColor-base)'
      },
      {
        title: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com/phucdx98/',
        color: 'var(--v-twitterColor-base)'
      },
      {
        title: 'Github',
        icon: 'mdi-github',
        link: 'https://github.com/dangxuanphuc/',
        color: 'var(--v-githubColor-base)'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.admin-name {
  color: var(--v-titleNavColor-base);
  font-size: 28px;
  font-weight: 400;
}
@media screen and (max-width: 600px) {
  .text-xs-center {
    text-align: center;
  }
}
</style>
