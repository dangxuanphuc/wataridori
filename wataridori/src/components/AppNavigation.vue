<template>
  <div>
    <v-card>
      <v-app-bar
        flat
        fixed
        class="container-app"
        color="var(--v-navBackground-base)"
      >
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
        <v-btn
          v-if="userIsAuthenticated"
          depressed
          class="text-capitalize mr-2 hidden-xs-only"
          to="/post/new"
        >
          <v-icon dark small class="mr-1">
            mdi-pencil
          </v-icon>
          Create Post
        </v-btn>
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
        <button
          class="toggle-btn hidden-xs-only"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <span v-if="$vuetify.theme.dark">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/night.png?alt=media&token=cc3a7ba6-4416-4d21-b1e5-490146a73903"
              class="button-nightmode"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/moon.png?alt=media&token=d694897a-80db-4b9b-bf56-e687acb245aa"
              class="night"
            />
          </span>
          <span v-else>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/day.png?alt=media&token=d106f474-1a3a-4922-a13a-eb9ff24bcba1"
              class="button-daymode"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/sun.png?alt=media&token=b026b9c2-0033-4ef5-ab90-7bbf4e35b2c8"
              class="day"
            />
          </span>
        </button>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="drawer-text">
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title :to="item.link">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-btn
          v-if="userIsAuthenticated"
          depressed
          class="text-capitalize mr-2"
          to="/post/new"
        >
          <v-icon dark small class="mr-1">
            mdi-pencil
          </v-icon>
          Create Post
        </v-btn>
        <br />
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
              class="text-capitalize my-2"
            >
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
        <br />
        <button
          class="toggle-btn"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <span v-if="$vuetify.theme.dark">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/night.png?alt=media&token=cc3a7ba6-4416-4d21-b1e5-490146a73903"
              class="button-nightmode"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/moon.png?alt=media&token=d694897a-80db-4b9b-bf56-e687acb245aa"
              class="night"
            />
          </span>
          <span v-else>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/day.png?alt=media&token=d106f474-1a3a-4922-a13a-eb9ff24bcba1"
              class="button-daymode"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/sun.png?alt=media&token=b026b9c2-0033-4ef5-ab90-7bbf4e35b2c8"
              class="day"
            />
          </span>
        </button>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    apptitle: 'Wataridori Blog',
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
  padding: 0 48px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
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
.toggle-btn {
  position: relative;
  margin-left: 4px;
  outline: none;
  .button-nightmode {
    background-color: #2754a5;
    height: 35px;
    margin-top: 5px;
    border-radius: 20px;
  }
  .night {
    position: absolute;
    height: 24px;
    top: 10px;
    left: 5px;
  }
  .button-daymode {
    height: 35px;
    margin-top: 5px;
  }
  .day {
    position: absolute;
    height: 24px;
    top: 10px;
    right: 5px;
  }
}
.drawer-text {
  background-color: #f1f1f1;
}
@media screen and (max-width: 960px) {
  .container-app {
    margin: 0;
    padding: 0 !important;
  }
}
</style>
