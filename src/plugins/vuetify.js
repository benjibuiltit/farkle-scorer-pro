import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#2e3192',
        secondary: '#B2D235',
        accent: '#1C9AD6',
        error: '#b71c1c',
      },
      dark: {
        primary: '#2e3192',
        secondary: '#B2D235',
        accent: '#1C9AD6',
        error: '#b71c1c',
      },
    },
  },
});
