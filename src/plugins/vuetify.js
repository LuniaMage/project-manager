// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);



export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    theme: {
      themes: {
        light: {
          primary: '#777777',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },
});
