<template>
  <div>
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
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fawai.jpeg?alt=media&token=c114fca7-00c5-4d36-a684-48e4033ae715'
      },
      {
        name: 'なごり雪',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fnagori-yuki.jpg?alt=media&token=8ce534de-e7ae-4948-b431-6f8066b39e31'
      },
      {
        name: 'オレンジ',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Forange.jpg?alt=media&token=cd43ac76-8875-4350-95d2-62eb32d0a94e'
      },
      {
        name: 'Sparkle',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fyour-name.jpg?alt=media&token=d9193b7c-2852-4fd7-b90f-c740b04df04d'
      },
      {
        name: 'ひらり',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fhirari.jpg?alt=media&token=7c5565f3-bc7b-404f-8175-136306332449'
      },
      {
        name: 'Mirai',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fmirai.jpg?alt=media&token=dfc49a71-40a9-4c59-832e-90e96dab0299'
      },
      {
        name: '雪の華',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fyuki-no-hana.jpeg?alt=media&token=cf20c2ce-43b5-4126-ac39-11adfee3e923'
      },
      {
        name: '叶わない恋でも',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/songs%2Fkanawanai-koi-demo.jpg?alt=media&token=4f055c9e-8e62-43b5-b3a8-10ac55238675'
      }
    ],
    singers: [
      {
        name: 'Anri Kumaki',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fanri-kumaki.jpeg?alt=media&token=caaa86ae-bb46-4ef4-9b3c-125cede0c4ab'
      },
      {
        name: 'Aoi Teshima',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Faoi-teshima.jpeg?alt=media&token=aefcd479-83d4-4cfe-af48-3ff133322991'
      },
      {
        name: 'Inori Minase',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Finori-minase.jpeg?alt=media&token=fd5be79f-9a73-49dc-be13-432c26ec7258'
      },
      {
        name: 'Maiko Fujita',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fmaiko-fujita.jpeg?alt=media&token=5382c43e-b120-42f1-99d1-1d8d157ed316'
      },
      {
        name: 'Noriko Sakai',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fnoriko-sakai.jpeg?alt=media&token=03c50ab6-9a98-418d-85f9-0ce40dca2c93'
      },
      {
        name: 'Radwimps',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fradwimps.jpeg?alt=media&token=05bd2300-b610-4eb6-b22d-c875b467b233'
      },
      {
        name: 'Shakurako Ohara',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fshakurako-ohara.jpeg?alt=media&token=7dc09643-610b-4a69-bf59-db9e7cf462e7'
      },
      {
        name: 'Mika Nakashima',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/singers%2Fmika-nakashima.jpg?alt=media&token=c2ed94de-8851-465a-aae0-94ddedeed53a'
      }
    ],
    others: [
      {
        name: 'ドラえもん',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/others%2Fdoraemon.jpg?alt=media&token=755e27cf-1794-4944-822e-c295fa2de6ae'
      },
      {
        name: 'Thiên văn học',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/others%2Fthien-van-hoc.jpg?alt=media&token=c1b2c4d1-c698-4fa1-a82b-867d2e67285a'
      },
      {
        name: 'Stephen Curry',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/others%2Fstephencurry.jpg?alt=media&token=e4cc9fd0-20d5-4738-8930-82fe562fd492'
      },
      {
        name: 'iOS Jailbreaking',
        url:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/others%2FiOS.jpg?alt=media&token=074ccb47-d553-466d-95f1-2cfcc35c1970'
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
