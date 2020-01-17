import Vue from "vue";
import "./shared/sass/theme.scss";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
