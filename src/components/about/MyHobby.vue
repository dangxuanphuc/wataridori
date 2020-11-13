<template>
  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
    <title-about :title="'Favorites'"></title-about>
    <v-card outlined class="card-hobby px-16">
      <v-tabs
        centered
        background-color="var(--v-backgroundCard-base)"
        color="var(--v-tabHobby-base)"
      >
        <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab }}</v-tab>
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
                  <v-row align="end" class="thumbnail-row lightbox fill-height">
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
  name: 'MyHobby',
  props: ['objects'],
  components: {
    TitleAbout
  },
  data: () => ({
    tabs: ['Japanese Music', 'Japanese Singers', 'Other'],
    musics: [
      {
        name: 'あわい',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212640/wataridori/images/awai.jpg'
      },
      {
        name: 'なごり雪',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602251930/wataridori/images/nagoriyuki.jpg'
      },
      {
        name: 'オレンジ',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/orange.jpg'
      },
      {
        name: 'Sparkle',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/your-name.jpg'
      },
      {
        name: 'ひらり',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602245131/wataridori/images/hirari-sakurako-ohara.jpg'
      },
      {
        name: 'Mirai',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212638/wataridori/images/mirai.jpg'
      },
      {
        name: '雪の華',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212638/wataridori/images/yuki-no-hana.jpg'
      },
      {
        name: '叶わない恋でも',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/kanawanai-koi-demo.jpg'
      }
    ],
    singers: [
      {
        name: 'Anri Kumaki',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/anri-kumaki.jpg'
      },
      {
        name: 'Aoi Teshima',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/aoi-teshima.jpg'
      },
      {
        name: 'Inori Minase',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212640/wataridori/images/inori-minase.jpg'
      },
      {
        name: 'Maiko Fujita',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602292216/wataridori/images/fujita-maiko.jpg'
      },
      {
        name: 'Noriko Sakai',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602251604/wataridori/images/norico-sakai.jpg'
      },
      {
        name: 'Radwimps',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/radwimps.jpg'
      },
      {
        name: 'Shakurako Ohara',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212640/wataridori/images/shakurako-ohara.jpg'
      },
      {
        name: 'Mika Nakashima',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212640/wataridori/images/mika-nakashima.jpg'
      }
    ],
    others: [
      {
        name: 'ドラえもん',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212642/wataridori/images/doraemon.jpg'
      },
      {
        name: 'Thiên văn học',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/thien-van-hoc.jpg'
      },
      {
        name: 'Stephen Curry',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/stephencurry.jpg'
      },
      {
        name: 'iOS Jailbreaking',
        url:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212643/wataridori/images/iOS.jpg'
      }
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
  background: var(--v-backgroundCard-base);
  border: none;
  .v-tabs {
    font-family: 'Oswald', sans-serif;
    .v-window-item.v-window-item--active {
      background: var(--v-backgroundCard-base) !important;
    }
    .thumbnail-row {
      .thumbnail {
        position: relative;
        margin-bottom: 0;
        transition: 1.3s;
        .thumbnail-detail {
          position: absolute;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
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
