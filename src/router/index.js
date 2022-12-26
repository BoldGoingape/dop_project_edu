//管理路由
import VueRouter from "Vue-router";
import Home from "../components/Home";
const router = new VueRouter({
  routes: [
    {
      path: "/Home",
      component: Home,
    },
  ],
});
//全局前置路由
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
  console.log(this.$store.state.isShow);
});
export default router;
