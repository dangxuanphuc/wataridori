<template>
  <div>
    <div class="skill">{{ skill }}</div>
    <div class="loading-bar">
      <div class="percentage" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['skill', 'percentNumber'],
  data: () => ({
    percentage: 0
  }),
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    var intVal = setInterval(() => {
      if (this.percentage < this.percentNumber) {
        this.percentage += 0.1;
      } else {
        clearInterval(intVal);
      }
    }, 0.01);
  }
};
</script>

<style lang="scss" scoped>
.skill {
  display: block;
  margin-bottom: 15px;
  font-size: 1.4em;
  line-height: 24px;
}
.loading-bar {
  position: relative;
  height: 15px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #5f5f5f;
  .percentage {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: block;
    height: 100%;
    border-radius: 3px;
    background-color: #f4645f;
  }
}
@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
