import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import Contact from '../views/Contact.vue';
import Blog from '../views/Blog.vue';

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
