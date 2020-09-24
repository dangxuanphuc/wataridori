<template>
  <v-app>
    <app-navigation></app-navigation>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.v-application {
  font-family: 'Noto Serif', sans-serif;
}
</style>
