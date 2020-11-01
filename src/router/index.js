import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Music from '../views/Music.vue';
import Signin from '../views/Signin.vue';
import CreatePost from '../views/CreatePost.vue';
import Post from '../views/Post.vue';
import Emoticons from '@/components/Emoticons.vue';
import AuthGuard from './auth-guard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-me',
    name: 'About',
    component: About
  },
  {
    path: '/favorite-songs',
    name: 'Music',
    component: Music
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/post/new',
    name: 'CreatePost',
    component: CreatePost,
    beforeEnter: AuthGuard
  },
  {
    path: '/posts/:id',
    name: 'Post',
    props: true,
    component: Post
  },
  {
    path: '/emoticons',
    name: 'Emoticons',
    component: Emoticons
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
