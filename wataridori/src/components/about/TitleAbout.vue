<template>
  <v-container>
    <v-divider></v-divider>
    <h2 class="title-name text-center py-5">{{ title }}</h2>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="scss" scoped>
.title-name {
  color: var(--v-titleNavColor-base);
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 500;
}
</style>
