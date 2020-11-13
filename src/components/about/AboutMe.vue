<template>
  <v-container>
    <v-card outlined class="card-info py-5 mb-6">
      <infor-me></infor-me>
      <tech-love></tech-love>
      <time-line></time-line>
      <skill-for-me></skill-for-me>
      <my-hobby></my-hobby>
    </v-card>
  </v-container>
</template>

<script>
import InforMe from './InforMe.vue';
import TechLove from './TechLove.vue';
import TimeLine from './TimeLine.vue';
import SkillForMe from './SkillForMe.vue';
import MyHobby from './MyHobby.vue';

export default {
  name: 'AboutMe',
  components: {
    InforMe,
    TechLove,
    TimeLine,
    SkillForMe,
    MyHobby
  }
};
</script>

<style lang="scss" scoped>
.card-info {
  background: var(--v-backgroundCard-base);
}
</style>
