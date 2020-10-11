import Vue from "vue";
import Vuex from "vuex";
import { file } from "./modules/file";
// import { test } from "./modules/test";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    file
    // test
  }
});
