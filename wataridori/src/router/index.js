import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import Contact from '../views/Contact.vue';
import Signin from '../views/Signin.vue';
import CreatePost from '../views/CreatePost.vue';
import Post from '../views/Post.vue';
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
    path: '/my-products',
    name: 'Product',
    component: Product
  },
  {
    path: '/contact-me',
    name: 'Contact',
    component: Contact
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
