import Vue from "nativescript-vue";
import Vuex from "vuex";
import store from "./store";
import App from "./src/App.vue";

Vue.use(Vuex);

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;
console.log('its complied')
new Vue({
  store,
  render: h => h("frame", [h(App)])
}).$start();
