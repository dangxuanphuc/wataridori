<template>
  <v-footer dark padless class="mt-10">
    <v-container>
      <v-card flat tile class="footer-card white--text text-center">
        <v-card-text class="py-8">
          <v-row>
            <v-col
              cols="12"
              class="col-lg-3 col-md-3 col-sm-3"
              v-for="(icon, index) in icons"
              :key="index"
            >
              <a
                :href="icon.link"
                target="_blank"
                class="white--text social-link"
              >
                <v-icon size="32px">{{ icon.name }}</v-icon> {{ icon.title }}
              </a>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-7">
          <div class="footer-link-nav">
            <a
              v-for="(item, index) in items"
              :key="index"
              :href="item.link"
              class="white--text social-link"
            >
              <span class="title-link">{{ item.title }}</span>
            </a>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text py-7">
          &copy; {{ new Date().getFullYear() }} {{ copyright }}
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    copyright: 'Dang Xuan Phuc Blog. All Rights Reserved.',
    icons: [
      {
        name: 'mdi-facebook',
        title: 'Facebook',
        link: 'https://facebook.com/wataridori.natsumi/'
      },
      {
        name: 'mdi-instagram',
        title: 'Instagram',
        link: 'https://www.instagram.com/wataridori.natsumi/'
      },
      {
        name: 'mdi-twitter',
        title: 'Twitter',
        link: 'https://twitter.com/phucdx98/'
      },
      {
        name: 'mdi-github',
        title: 'Github',
        link: 'https://github.com/dangxuanphuc/'
      }
    ],
    items: [
      { title: 'About me', link: '/about-me' },
      { title: 'Contact me', link: '/contact-me' },
      { title: 'IT', link: '/#' },
      { title: 'Japanese', link: '/#' },
      { title: 'My Products', link: '/my-products' }
    ]
  })
};
</script>

<style lang="scss" scoped>
.v-footer {
  background: #1a171b !important;
  .footer-card {
    background: #1a171b !important;
    .social-link {
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        opacity: 0.6;
        transition: 0.3s;
      }
      span:hover {
        color: #f4511e;
        transition: 0.3s;
      }
    }
  }
}
@media screen and (min-width: 960px) {
  .footer-link-nav {
    a {
      margin: 0 20px;
    }
  }
}
@media screen and (min-width: 600px) {
  .footer-link-nav {
    a {
      margin: 0 20px;
    }
  }
}
@media screen and (max-width: 600px) {
  .title-link {
    display: block;
    line-height: 2;
  }
}
</style>
