<template>
  <div id="app">
    <router-view></router-view>
    <LoginBoxVue></LoginBoxVue>
    <CheckSystemVue v-if="$store.state.isShow"></CheckSystemVue>
    <!-- <HomeVue></HomeVue> -->
  </div>
</template>

<script>
import LoginBoxVue from "./components/LoginBox.vue";
import CheckSystemVue from "./components/CheckSystem.vue";
// import HomeVue from "./components/Home.vue";
export default {
  name: "App",
  components: {
    LoginBoxVue,
    CheckSystemVue,
    // HomeVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  margin: 0px 0px;
  padding: 0px 0px;
}
</style>
