<template>
  <div>
    <vue-simplemde ref="markdownEditor" />
  </div>
</template>

<script>
import VueSimplemde from 'vue-simplemde';

export default {
  components: {
    VueSimplemde
  }
};
</script>

<style lang="scss" scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>
