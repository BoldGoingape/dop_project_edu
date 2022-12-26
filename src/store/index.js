//创建 Vuex 核心 store
//引入
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//准备axtions 用于响应组将中的动作
const actions = {
  isShow(context, valeu) {
    context.commit("ISSHOW", valeu);
  },
};
//操作数据state
const mutations = {
  ISSHOW(state, valeu) {
    state.isShow = valeu;
  },
};
//准备state存储 数据
const state = {
  isShow: false,
  //登录状态
  LoginState: false,
};
//暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
