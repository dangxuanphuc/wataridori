import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import Contact from '../views/Contact.vue';
import Signin from '../views/Signin.vue';
import CreateBlog from '../views/CreateBlog.vue';
import Blog from '../views/Blog.vue';
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
    path: '/blog/new',
    name: 'CreateBlog',
    component: CreateBlog,
    beforeEnter: AuthGuard
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
