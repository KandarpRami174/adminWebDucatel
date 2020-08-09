import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./router/routes";
import moment from "moment";

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MMMM DD, YYYY");
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
