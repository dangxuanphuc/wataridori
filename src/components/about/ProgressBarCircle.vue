<template>
  <div>
    <vue-easy-pie-chart
      :percent="percentNumber"
      :bar-color="' #f4645f'"
      :track-color="'#5f5f5f'"
      :scale-color="false"
      :line-cap="'square'"
      :line-width="18"
      :scale-length="18"
      :size="210"
    >
      {{ skill }}
    </vue-easy-pie-chart>
  </div>
</template>

<script>
import VueEasyPieChart from 'vue-easy-pie-chart';
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css';

export default {
  name: 'ProgressBarCircle',
  props: ['skill', 'percentNumber'],
  components: {
    VueEasyPieChart
  }
};
</script>

<style lang="scss" scoped>
.vue-easy-pie-chart {
  font: 18px 'Oswald', sans-serif;
  text-transform: uppercase;
}
</style>
