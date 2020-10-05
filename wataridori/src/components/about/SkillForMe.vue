<template>
  <div>
    <title-about :title="'Skills'"></title-about>
    <v-container>
      <v-row>
        <v-col
          v-for="(language, index) in languages"
          :key="index"
          cols="12"
          md="4"
          sm="4"
        >
          <progress-bar-circle
            :skill="language.name"
            :percentNumber="language.percent"
          ></progress-bar-circle>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(skill, index) in skills"
          :key="index"
          cols="12"
          md="6"
          sm="6"
        >
          <progress-bar
            :skill="skill.name"
            :percentNumber="skill.percent"
          ></progress-bar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TitleAbout from './TitleAbout.vue';
import ProgressBar from './ProgressBar.vue';
import ProgressBarCircle from './ProgressBarCircle.vue';

export default {
  data: () => ({
    languages: [
      { name: 'Vietnamese', percent: 100 },
      { name: 'Japanese', percent: 30 },
      { name: 'English', percent: 60 }
    ],
    skills: [
      { name: 'CSS', percent: 85 },
      { name: 'VueJS', percent: 35 },
      { name: 'ReactJS', percent: 20 },
      { name: 'Ruby', percent: 55 }
    ]
  }),
  components: {
    TitleAbout,
    ProgressBar,
    ProgressBarCircle
  }
};
</script>

<style lang="scss" scoped></style>
