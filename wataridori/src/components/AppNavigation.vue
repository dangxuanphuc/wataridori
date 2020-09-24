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
      { flag: 'vietnam.png', name: 'Tiếng Việt' },
      { flag: 'united-kingdom.png', name: 'English' },
      { flag: 'japan.png', name: '日本語' }
    ],
    themes: [{ name: 'Light' }, { name: 'Dark' }]
  }),
  methods: {
    checkCountry() {
      console.log('test');
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
