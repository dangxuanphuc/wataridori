<template>
  <v-container>
    <v-card class="section-title my-5" outlined>
      <h1>{{ title }}</h1>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'TitleNavigation',
  props: ['title']
};
</script>

<style lang="scss" scoped>
.section-title {
  padding: 22px;
  text-align: center;
  background: var(--v-backgroundCard-base);
  h1 {
    font-weight: 400;
    font-size: 40px;
    color: var(--v-titleNavColor-base);
  }
}
</style>
