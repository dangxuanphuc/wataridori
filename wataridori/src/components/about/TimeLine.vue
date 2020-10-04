<template>
  <div>
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
  components: {
    TitleAbout
  },
  data: () => ({
    items: [
      {
        title: 'Trường THPT Tứ Kỳ - Hải Dương',
        color: 'green',
        year: '09/2013 - 06/2016',
        image:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Ftuky.png?alt=media&token=a72a38a9-2bf4-438e-a57d-cd7798e9add1',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vero facilis ipsam esse sit cumque, sed possimus debitis ipsum alias at optio provident nihil reiciendis architecto laudantium a? Id laudantium eius nihil molestiae!'
      },
      {
        title: 'Trường Đại học Khoa học Tự nhiên, ĐHQGHN',
        color: 'blue',
        year: '09/2016 - 07/2020',
        image:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fkhtn.jpg?alt=media&token=eba90c6c-77be-4d01-b011-140a5540a6cb',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vero facilis ipsam esse sit cumque, sed possimus debitis ipsum alias at optio provident nihil reiciendis architecto laudantium a? Id laudantium eius nihil molestiae!'
      },
      {
        title: '将来',
        color: 'pink',
        year: '08/2020 - Present',
        image:
          'https://firebasestorage.googleapis.com/v0/b/wataridori-blog.appspot.com/o/about%2Fjapan.jpeg?alt=media&token=d9901d27-e979-4132-9659-7f14a9438c57',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vero facilis ipsam esse sit cumque, sed possimus debitis ipsum alias at optio provident nihil reiciendis architecto laudantium a? Id laudantium eius nihil molestiae!'
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
