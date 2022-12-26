//创建 Vuex 核心 store
//引入
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//准备axtions 用于响应组将中的动作
const actions = {};
//操作数据state
const mutations = {};
//准备state存储 数据
const state = {
  isShow: false,
};
//暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
