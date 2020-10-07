import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        titlePost: '#000',
        titlePostHover: '#00796b',
        navBackground: '#fff',
        backgroundApp: '#fff',
        backgroundCard: '#eee',
        postTextColor: '#333',
        dateColor: '#777',
        tagColor: '#1c1c1c',
        readmoreColor: '#00796b',
        backgroundFooter: '#1a171b',
        shareBtnColor: '#1976d2',
        titleNavColor: '#00897B',
        tabHobby: '#00b8d4',
        postShadow: '#9e9ea9',
        facebookColor: '#01579B',
        twitterColor: '#1da1f2',
        instagramColor: '#833ab4',
        githubColor: '#000'
      },
      dark: {
        titlePost: '#fff',
        titlePostHover: '#00e5ff',
        navBackground: '#1e1e2f',
        backgroundApp: '#1e1e2f',
        backgroundCard: '#27293d',
        postTextColor: '#cdcfd4',
        dateColor: '#a0a5b0',
        tagColor: '#f2f2f2',
        readmoreColor: '#26a69a',
        backgroundFooter: '#27293d',
        shareBtnColor: '#26a69a',
        titleNavColor: '#18ffff',
        tabHobby: '#00b8d4',
        postShadow: '#4a4848',
        facebookColor: '#01579b',
        twitterColor: '#1da1f2',
        instagramColor: '#833ab4',
        githubColor: '#000'
      }
    }
  }
});

export default vuetify;
