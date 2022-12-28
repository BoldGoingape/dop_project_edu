//管理路由
import { Message } from "element-ui";
import VueRouter from "Vue-router";
// import LoginBox from "../components/LoginBox";
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
  if (to.path === "/Home") {
    if (sessionStorage.getItem("token")) {
      next();
    } else {
      Message({
        message: "请先登录...",
        type: "success",
      });
      next({
        path: "/LoginBox",
      });
    }
  }
});
export default router;
