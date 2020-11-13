<template>
  <v-container>
    <div v-if="loading" class="text-center" style="margin-top: 20px">
      <v-progress-circular
        indeterminate
        color="#00897b"
        :width="7"
        :size="70"
      ></v-progress-circular>
    </div>
    <div v-else>
      <masonry
        :cols="{ default: 3, 1262: 2, 662: 1 }"
        :gutter="{ default: '30px', 700: '15px' }"
      >
        <v-card
          class="my-3 card-info"
          max-width="350"
          v-for="emoji in emoticons"
          :key="emoji.index"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{ emoji.key }}</v-card-title>
            </div>
            <v-avatar class="my-7 mr-5" size="80" :class="emoji.class">
              <img :src="emoji.src" />
            </v-avatar>
          </div>
        </v-card>
      </masonry>
    </div>
  </v-container>
</template>

<script>
import emojiArray from '@/assets/emoticon.json';

export default {
  name: 'Emoticons',
  data: () => ({
    emoticons: emojiArray
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.gifEmoji {
  width: 27px !important;
  height: 17px !important;
  min-width: 30px !important;
}
.card-info {
  background: var(--v-backgroundCard-base);
}
</style>
