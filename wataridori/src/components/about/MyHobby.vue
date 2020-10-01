<template>
  <div>
    <title-about :title="'Favorites'"></title-about>
    <v-card outlined class="card-hobby px-16">
      <v-tabs centered background-color="#eee">
        <v-tab>Japanese Music</v-tab>
        <v-tab>Japanese Singers</v-tab>
        <v-tab>Other</v-tab>
        <v-tab-item v-for="(n, index) in 3" :key="index">
          <v-container>
            <v-row justify="center">
              <v-col
                v-for="(item, index) in checkArray(n)"
                :key="index"
                cols="12"
                md="3"
                sm="6"
              >
                <v-img :src="item.url" :aspect-ratio="20 / 17">
                  <v-row
                    align="end"
                    class="thumbnail-row lightbox white--text fill-height"
                  >
                    <v-col class="thumbnail">
                      <div class="thumbnail-detail text-center">
                        {{ item.name }}
                      </div>
                    </v-col>
                  </v-row>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import TitleAbout from './TitleAbout.vue';

export default {
  props: ['objects'],
  components: {
    TitleAbout
  },
  data: () => ({
    musics: [
      { name: 'あわい', url: 'songs/awai.jpeg' },
      { name: 'なごり雪', url: 'songs/nagori-yuki.jpg' },
      { name: 'オレンジ', url: 'songs/orange.jpg' },
      { name: 'Sparkle', url: 'songs/your-name.jpg' },
      { name: 'ひらり', url: 'songs/hirari.jpg' },
      { name: 'Mirai', url: 'songs/mirai.jpg' },
      { name: '雪の華', url: 'songs/yuki-no-hana.jpeg' },
      { name: '叶わない恋でも', url: 'songs/kanawanai-koi-demo.jpg' }
    ],
    singers: [
      { name: 'Anri Kumaki', url: 'singers/anri-kumaki.jpeg' },
      { name: 'Aoi Teshima', url: 'singers/aoi-teshima.jpeg' },
      { name: 'Inori Minase', url: 'singers/inori-minase.jpeg' },
      { name: 'Maiko Fujita', url: 'singers/maiko-fujita.jpeg' },
      { name: 'Noriko Sakai', url: 'singers/noriko-sakai.jpeg' },
      { name: 'Radwimps', url: 'singers/radwimps.jpeg' },
      { name: 'Shakurako Ohara', url: 'singers/shakurako-ohara.jpeg' },
      { name: 'Mika Nakashima', url: 'singers/mika-nakashima.jpg' }
    ],
    others: [
      { name: 'ドラえもん', url: 'others/doraemon.jpg' },
      { name: 'Thiên văn học', url: 'others/thien-van-hoc.jpg' },
      { name: 'Stephen Curry', url: 'others/stephencurry.jpg' },
      { name: 'iOS Jailbreaking', url: 'others/iOS.jpg' }
    ]
  }),
  methods: {
    checkArray(n) {
      if (n == 1) {
        return this.musics;
      } else if (n == 2) {
        return this.singers;
      } else {
        return this.others;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-hobby {
  border: none;
  background: #eee;
  .v-tabs {
    font-family: 'Oswald', sans-serif;
    .v-window-item.v-window-item--active {
      background: #eee !important;
    }
    .thumbnail-row {
      .thumbnail {
        position: relative;
        margin-bottom: 0;
        transition: 1.3s;
        .thumbnail-detail {
          position: absolute;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px 25px;
          font-size: 24px;
          font-weight: 200;
          width: 100%;
          bottom: 0%;
          left: 0%;
          z-index: 2;
          opacity: 0;
          transition: 0.3s;
        }
      }
      &:hover {
        .thumbnail-detail {
          display: block;
          opacity: 1;
        }
      }
    }
  }
}
</style>
