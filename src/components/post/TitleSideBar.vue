<template>
  <div>
    <h1 class="title-sidebar">
      <span>{{ title }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleSideBar',
  props: ['title']
};
</script>

<style lang="scss" scoped>
.title-header {
  .title-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -17px;
    text-align: center;
    width: 100%;
    z-index: 3;
    > span {
      background: var(--v-backgroundFooter-base);
      color: #fff;
      position: relative;
      display: inline-block;
      font-size: 18px;
      font-weight: normal;
      padding: 0 15px;
      line-height: 30px;
      &::before {
        position: absolute;
        left: -15px;
        right: auto;
        top: 50%;
        border: 15px solid var(--v-backgroundFooter-base);
        content: '';
        height: 0;
        width: 0;
        margin-top: -15px;
        border-left-color: transparent;
        border-right-color: transparent;
      }
      &::after {
        position: absolute;
        right: -15px;
        top: 50%;
        border: 15px solid var(--v-backgroundFooter-base);
        content: '';
        height: 0;
        width: 0;
        margin-top: -15px;
        border-left-color: transparent;
        border-right-color: transparent;
      }
    }
  }
}
</style>
