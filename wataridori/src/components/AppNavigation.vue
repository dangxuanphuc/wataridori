<template>
  <div>
    <v-card>
      <v-app-bar flat class="container-app p-0" color="white">
        <v-app-bar-nav-icon
          @click="sideNav = true"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="nav-brand mr-3">
          <router-link to="/" tag="span">
            {{ apptitle }}
          </router-link>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            text
            depressed
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.link"
          >
            <span class="nav-item">{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-tooltip bottom v-if="userIsAuthenticated">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="teal"
              v-bind="attrs"
              v-on="on"
              to="/post/new"
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
          <span>Create Post</span>
        </v-tooltip>
        <v-menu
          top
          :close-on-content-click="closeOnContentClick"
          :close-on-click="closeOnClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              v-bind="attrs"
              v-on="on"
              class="text-capitalize hidden-xs-only"
            >
              English
            </v-btn>
          </template>
          <v-list class="hidden-xs-only">
            <v-list-item
              v-for="(country, index) in countries"
              :key="index"
              @click="checkCountry"
            >
              <v-list-item-avatar width="20" height="20" min-width="20">
                <v-img :src="country.flag"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>{{ country.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          inset
          label="Dark"
          class="ml-2 hidden-xs-only"
        ></v-switch>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title :to="item.link">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-menu
          top
          :close-on-content-click="closeOnContentClick"
          :close-on-click="closeOnClick"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed v-bind="attrs" v-on="on" class="text-capitalize">
              English
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(country, index) in countries"
              :key="index"
              @click="checkCountry"
            >
              <v-list-item-avatar width="20" height="20" min-width="20">
                <v-img :src="country.flag"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>{{ country.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          inset
          label="Dark"
          class="ml-2"
        ></v-switch>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    apptitle: 'Dang Xuan Phuc Blog',
    sideNav: false,
    closeOnClick: true,
    closeOnContentClick: true,
    menuItems: [
      { title: 'Home', link: '/' },
      { title: 'About Me', link: '/about-me' },
      { title: 'My Products', link: '/my-products' },
      { title: 'Contact Me', link: '/contact-me' }
    ],
    countries: [
      {
        flag:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fvietnam.png?alt=media&token=9caa26e3-4307-459a-9b3a-e892e4bfc703',
        name: 'Tiếng Việt'
      },
      {
        flag:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Funited-kingdom.png?alt=media&token=a274acc5-cbe1-42a1-8854-f824049284fd',
        name: 'English'
      },
      {
        flag:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fjapan.png?alt=media&token=e4b88259-5f9e-4ee3-8390-e8aa8799db23',
        name: '日本語'
      }
    ],
    themes: [{ name: 'Light' }, { name: 'Dark' }]
  }),
  methods: {
    checkCountry() {
      console.log('test');
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
.container-app {
  margin: 0 48px;
  .nav-brand {
    font-size: 27px;
    padding-left: 0 !important;
    text-transform: uppercase;
    cursor: pointer;
  }
  .nav-item {
    font-size: 12px;
  }
}
@media screen and (max-width: 670px) {
  .container-app {
    margin: 0;
  }
}
</style>
