import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app';
import 'firebase/auth';
import DateFilter from './filters/date';
import VueMasonry from 'vue-masonry-css';

Vue.use(VueMasonry);
Vue.config.productionTip = false;

Vue.filter('date', DateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbH2nmd-wFo1gKB8klW2Bkr0H7cBCH66Q',
      authDomain: 'wataridori-blog.firebaseapp.com',
      databaseURL: 'https://wataridori-blog.firebaseio.com',
      projectId: 'wataridori-blog',
      storageBucket: 'wataridori-blog.appspot.com'
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignin', user);
      }
    });
    this.$store.dispatch('loadAllPosts');
  }
}).$mount('#app');
