<template>
  <v-app>
    <app-navigation></app-navigation>
    <main>
      <router-view></router-view>
    </main>
    <back-to-top></back-to-top>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import BackToTop from '@/components/BackToTop.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    BackToTop
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  font-family: 'Noto Serif', sans-serif;
}
</style>
