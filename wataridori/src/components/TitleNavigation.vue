<template>
  <v-container>
    <v-card class="mx-auto section-title" outlined>
      <h1>{{ title }}</h1>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="scss" scoped>
.section-title {
  padding: 22px;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: 40px;
    color: #31708f;
  }
}
</style>
