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
          <v-btn text depressed to="/emoticons" v-if="userIsAuthenticated">
            <span class="nav-item">Emoticons</span>
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
        <v-btn
          fab
          small
          depressed
          class="ml-2 hidden-xs-only"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon v-if="!$vuetify.theme.dark">mdi-brightness-4</v-icon>
          <v-icon v-else>mdi-white-balance-sunny</v-icon>
        </v-btn>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="drawer-text">
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :href="item.link"
          >
            <v-list-item-title>
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
        <v-btn
          fab
          small
          depressed
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon v-if="!$vuetify.theme.dark">mdi-brightness-4</v-icon>
          <v-icon v-else>mdi-white-balance-sunny</v-icon>
        </v-btn>
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
      { title: 'Favorite Songs', link: '/favorite-songs' }
    ]
  }),
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
