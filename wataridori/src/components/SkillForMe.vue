<template>
  <div>
    <title-about :title="'Skills'"></title-about>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="4">
          <progress-bar-circle
            :skill="'Vietnamese'"
            :percentNumber="100"
          ></progress-bar-circle>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <progress-bar-circle
            :skill="'Japanese'"
            :percentNumber="30"
          ></progress-bar-circle>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <progress-bar-circle
            :skill="'English'"
            :percentNumber="50"
          ></progress-bar-circle>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <progress-bar :skill="'CSS'" :percentNumber="75"></progress-bar>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <progress-bar :skill="'VueJS'" :percentNumber="35"></progress-bar>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <progress-bar :skill="'ReactJS'" :percentNumber="20"></progress-bar>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <progress-bar :skill="'Ruby'" :percentNumber="55"></progress-bar>
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
  components: {
    TitleAbout,
    ProgressBar,
    ProgressBarCircle
  }
};
</script>

<style lang="scss" scoped></style>
