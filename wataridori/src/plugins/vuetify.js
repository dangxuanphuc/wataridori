import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  themes: {
    light: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#31708F',
      success: '#4CAF50',
      warning: '#FB8C00',
      white: '#FFFFFF'
    },
    dark: {
      primary: '#2196F3',
      secondary: '#424242',
      accent: '#FF4081',
      error: '#FF5252',
      info: '#31708F',
      success: '#4CAF50',
      warning: '#FB8C00'
    }
  }
});
