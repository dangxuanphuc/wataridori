<template>
  <v-container>
    <v-card outlined class="card-info py-5">
      <infor-me></infor-me>
      <tech-love></tech-love>
      <time-line></time-line>
      <skill-for-me></skill-for-me>
    </v-card>
  </v-container>
</template>

<script>
import InforMe from './InforMe.vue';
import TechLove from './TechLove.vue';
import TimeLine from './TimeLine.vue';
import SkillForMe from './SkillForMe.vue';

export default {
  components: {
    InforMe,
    TechLove,
    TimeLine,
    SkillForMe
  }
};
</script>

<style lang="scss" scoped>
.card-info {
  background: #eee;
}
</style>
