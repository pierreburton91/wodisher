import Vue from "vue";
import "./shared/sass/theme.scss";
import anime from "animejs/lib/anime.es.js";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.prototype.$anime = anime;

new Vue({
  render: h => h(App)
}).$mount("#app");
