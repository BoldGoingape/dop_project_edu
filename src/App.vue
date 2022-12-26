<template>
  <div id="app">
    <LoginBoxVue></LoginBoxVue>
    <CheckSystemVue v-if="$store.state.isShow"></CheckSystemVue>
  </div>
</template>

<script>
import LoginBoxVue from "./components/LoginBox.vue";
import CheckSystemVue from "./components/CheckSystem.vue";
export default {
  name: "App",
  components: {
    LoginBoxVue,
    CheckSystemVue,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
