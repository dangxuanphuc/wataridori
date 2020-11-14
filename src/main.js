import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';

import fb from './firebase.js';
import DateFilter from './filters/date';
import VueMasonry from 'vue-masonry-css';
import VueSocialSharing from 'vue-social-sharing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(VueMasonry);
Vue.use(VueSocialSharing);
Vue.use(mavonEditor);
Vue.config.productionTip = false;

Vue.filter('date', DateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user);
      }
    });
    this.$store.dispatch('loadAllPosts');
    AOS.init();
  }
}).$mount('#app');
