<template>
  <v-footer dark padless>
    <v-container>
      <v-card flat tile class="footer-card text-center">
        <v-card-text class="py-8">
          <v-row>
            <v-col
              cols="12"
              class="col-lg-3 col-md-3 col-sm-3"
              v-for="(icon, index) in icons"
              :key="index"
            >
              <a :href="icon.link" target="_blank" class="social-link">
                <v-icon size="32px">{{ icon.name }}</v-icon> {{ icon.title }}
              </a>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-7">
          <div class="footer-link-nav">
            <router-link
              v-for="(item, index) in items"
              :key="index"
              :to="item.link"
              class="social-link"
            >
              <span class="title-link">{{ item.title }}</span>
            </router-link>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-7" v-if="!userIsAuthenticated" v-once>
          &copy; {{ new Date().getFullYear() }}
          <Login :text-login="name" />
          {{ copyright }}
        </v-card-text>
        <v-card-text class="footer-end py-7" v-else v-once>
          &copy; {{ new Date().getFullYear() }}
          <a class="btn-signin-logout" @click="onLogout">
            {{ name }}
          </a>
          {{ copyright }}
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
import Swal from 'sweetalert2';
import Login from '@/views/Login';

export default {
  name: 'FooterApp',
  components: {
    Login
  },
  data: () => ({
    name: 'Wataridori',
    copyright: ' Blog. All Rights Reserved.',
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
      { title: 'Favorite songs', link: '/favorite-songs' },
      { title: 'Japanese', link: '/#' },
      { title: 'IT', link: '/#' }
    ]
  }),
  methods: {
    onLogout() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'さようなら、遊びをお楽しみください！',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Goodbye'
      }).then(result => {
        if (result.isConfirmed) {
          this.$store.dispatch('logout');
        }
      });
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.v-footer {
  background: var(--v-backgroundFooter-base) !important;
  color: #fff !important;
  .footer-card {
    background: var(--v-backgroundFooter-base) !important;
    .social-link {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        opacity: 0.6;
        transition: 0.3s;
      }
      span:hover {
        opacity: 0.75;
        transition: 0.3s;
      }
    }
    .footer-end {
      color: var(--v-footerend-base);
    }
    .btn-signin-logout {
      color: var(--v-white-base);
      text-decoration: none;
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
