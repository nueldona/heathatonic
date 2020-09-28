import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "./scss/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { vSwitch, vCase, vDefault } from "v-switch-case";
import { Store } from "vuex";

Vue.config.productionTip = false;

const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);

Vue.use(vSwitch, vCase, vDefault);
Vue.component("icon", require("./components/Icons").default);
Vue.component("cards", require("./components/cards").default);

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
  // store,
  Store
}).$mount("#app");
