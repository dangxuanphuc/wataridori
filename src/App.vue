<template>
  <v-app>
    <app-navigation></app-navigation>
    <main class="mt-16">
      <router-view></router-view>
    </main>
    <back-to-top></back-to-top>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import BackToTop from '@/components/shared/BackToTop.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    BackToTop
  }
};
</script>

<style lang="scss" scoped>
@import 'assets/vender/scrollbar.css';
.v-application {
  font-family: 'Noto Serif', sans-serif;
  background-color: var(--v-backgroundApp-base) !important;
}
</style>
