<template>
  <div>
    <transition name="back-to-top-fade">
      <div
        class="vue-back-to-top"
        :style="`bottom:${this.bottom}; right:${this.right};`"
        v-show="visible"
        @click="backToTop"
      >
        <v-img
          src="https://res.cloudinary.com/phucdx/image/upload/v1604675788/wataridori/images/backtotop.png"
        ></v-img>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 300
    },
    right: {
      type: String,
      default: '30px'
    },
    bottom: {
      type: String,
      default: '40px'
    }
  },
  data: () => ({
    visible: false
  }),
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 12));
      }
    };
    window.addEventListener('scroll', this.catchScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll);
  },
  methods: {
    catchScroll() {
      this.visible = window.pageYOffset > parseInt(this.visibleoffset);
    },
    backToTop() {
      window.smoothscroll();
      this.$emit('scrolled');
    }
  }
};
</script>

<style lang="scss" scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}
.vue-back-to-top {
  position: fixed;
  z-index: 1000;
  cursor: pointer;
}
</style>
