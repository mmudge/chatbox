import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.indigo.darken4, // #FFCDD2
    secondary: colors.blue.darken4,
    accent: colors.indigo.accent1 // #3F51B5
  }
})
