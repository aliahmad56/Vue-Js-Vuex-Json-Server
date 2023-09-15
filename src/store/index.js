
// import { createStore } from 'vuex'
// import Names from "./modules/Restaurant/Names"
// export default createStore({
//   modules:{
//     Names
//   }
// });

// import Vue from 'vue';
import Vuex from 'vuex';
import Restaurant from './modules/Restaurant';



export default new Vuex.Store({
  modules: {
    Restaurant,
    // other modules...
  },
});