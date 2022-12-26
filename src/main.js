import Vue from "vue";
import App from "./App.vue";
//引入Element
import ElementUI from "element-ui";
//图标库
import "../public/font/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
//引入VueRoter
import VueRoter from "vue-router";
//引入路由器
import router from "./router";
//引入store
import store from "./store";
// 引入axios
import axios from "axios";
// 挂载到vue原型链上
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRoter);
new Vue({
  render: (h) => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
