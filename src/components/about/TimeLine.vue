<template>
  <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
    <title-about :title="'Education & Work'"></title-about>
    <v-container>
      <v-timeline class="px-15">
        <v-timeline-item v-for="(item, i) in items" :key="i" large>
          <template v-slot:icon>
            <v-avatar>
              <img :src="item.image" />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${item.color}--text`"
              v-text="item.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`font-weight-light mb-4 ${item.color}--text`">
              {{ item.title }}
            </h2>
            <div>
              {{ item.description }}
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
  name: 'TimeLine',
  components: {
    TitleAbout
  },
  data: () => ({
    items: [
      {
        title: 'Tu Ky High School - Hai Duong',
        color: 'green',
        year: '09/2013 - 06/2016',
        image:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212642/wataridori/images/tuky.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar, eros ac placerat egestas, dolor urna pulvinar enim, non pretium metus justo at augue.'
      },
      {
        title: 'VNU University of Science',
        color: 'blue',
        year: '09/2016 - 09/2020',
        image:
          'https://res.cloudinary.com/phucdx/image/upload/v1602212642/wataridori/images/khtn.jpg',
        description:
          'Phasellus vitae arcu commodo, pulvinar velit ut, vulputate neque. Ut at nunc id libero faucibus facilisis. Nunc facilisis purus augue, id faucibus lacus euismod in. Vestibulum porta eleifend ornare.'
      },
      {
        title: 'Identity Vietnam',
        color: 'idenColor',
        year: '12/2020 - Present',
        image:
          'https://res.cloudinary.com/phucdx/image/upload/v1615003162/wataridori/images/identity.jpg',
        description:
          'Nulla nec metus sem. Sed dictum semper ipsum vel cursus. Nunc elementum pretium est, quis tempor nisl. Aenean vestibulum hendrerit euismod.'
      },
      {
        title: 'Come to Japan',
        color: 'instagramColor',
        year: '202?',
        image:
          'https://res.cloudinary.com/phucdx/image/upload/v1615003346/wataridori/images/japan_j8myiu.png',
        description:
          'Aliquam vel tincidunt arcu, semper hendrerit mauris. Sed sollicitudin nisi ante, quis viverra odio porttitor vel. Morbi vitae lorem sit amet diam sollicitudin porttitor.'
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
