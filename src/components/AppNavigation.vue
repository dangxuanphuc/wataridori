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
          <router-link to="/" tag="span" v-once>
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
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-pencil-fill mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            />
          </svg>
          Create Post
        </v-btn>
        <v-btn
          fab
          small
          depressed
          class="ml-2 hidden-xs-only"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <svg
            v-if="!$vuetify.theme.dark"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 16 16"
            class="bi bi-moon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
            />
          </svg>
          <svg
            v-else
            width="1.8em"
            height="1.8em"
            viewBox="0 0 16 16"
            class="bi bi-brightness-high-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            <path
              fill-rule="evenodd"
              d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            />
          </svg>
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
  name: 'AppNavigation',
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
