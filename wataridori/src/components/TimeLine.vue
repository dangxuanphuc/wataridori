<template>
  <div>
    <title-about :title="'Education & Work'"></title-about>
    <v-container>
      <v-timeline class="px-15">
        <v-timeline-item v-for="(year, i) in years" :key="i" large>
          <template v-slot:icon>
            <v-avatar>
              <img :src="year.image" />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`font-weight-light mb-4 ${year.color}--text`">
              {{ year.title }}
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
import TitleAbout from './TitleAbout.vue';

export default {
  components: {
    TitleAbout
  },
  data: () => ({
    years: [
      {
        title: 'Trường THPT Tứ Kỳ - Hải Dương',
        color: 'pink',
        year: '09/2013 - 06/2016',
        image: 'tuky.png'
      },
      {
        title: 'Trường Đại học Khoa học Tự nhiên, ĐHQGHN',
        color: 'blue',
        year: '09/2016 - 07/2020',
        image: 'khtn.jpg'
      },
      {
        title: 'Lorem ipsum',
        color: 'green',
        year: '08/2020 - Present',
        image: 'japan.jpeg'
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
