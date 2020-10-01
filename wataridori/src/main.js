import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBG_F1pBlaOjx_QnVgcUXJ9gv3SDDWUWtQ',
      authDomain: 'wataridori-82227.firebaseapp.com',
      databaseURL: 'https://wataridori-82227.firebaseio.com',
      projectId: 'wataridori-82227',
      storageBucket: 'wataridori-82227.appspot.com'
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignin', user);
      }
    });
  }
}).$mount('#app');
