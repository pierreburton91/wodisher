import Vue from "vue";
import "./shared/sass/theme.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
