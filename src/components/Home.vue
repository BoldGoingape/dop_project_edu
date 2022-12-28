<template>
  <div class="HomeBox">
    <el-container>
      <el-header
        ><el-row>
          <el-col :span="1"
            ><div class="grid-content bg-purple">
              <i class="el-icon-menu ft-30 wh-60" @click="checkSystem"></i></div
          ></el-col>
          <el-col :span="1" class="logo"><div></div></el-col>
          <el-col :span="2"
            ><div style="line-height: 20px">
              <h1 class="ft-24 ft-blue lp4">赛鸣科技</h1>
            </div></el-col
          >
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="2"
            ><div class="grid-content bg-purple-light">
              <h5
                style="
                  height: 25px;
                  background-color: #ff8f74;
                  border-top-left-radius: 30px;
                  border-bottom-left-radius: 30px;
                  line-height: 25px;
                  text-align: center;
                  color: aliceblue;
                "
              >
                天津市赛鸣科技有限公司
              </h5>
            </div>
          </el-col>
          <el-col :span="1"
            ><div class="grid-content bg-purple">
              <!-- 状态 -->
              <el-dropdown style="margin-top: 25px">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div></el-col
          >
        </el-row></el-header
      >
      <el-container class="contents">
        <el-aside width="200px">
          <div class="left-box">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              unique-opened
              background-color="#0080c9"
              text-color="#fff"
            >
              <el-submenu
                index="1"
                v-for="(item, index) in NavMenu"
                :key="index"
              >
                <template slot="title">
                  <i class="el-icon-document" style="color: white"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <div class="tags">
            <el-tag :class="{ active: at == 0 }" @click="switchTag(0, '欢迎页')"
              >欢迎页</el-tag
            >
            <el-tag
              v-for="item in tags"
              :key="item.name"
              :type="item.type"
              closable
              @close="tagClose(item)"
              @click="switchTag(22, item.name)"
              :class="{
                active: at == 1 && item.name.trim() == tag.toString().trim(),
              }"
            >
              {{ item.name }}
            </el-tag>
          </div>
          <!-- 路由视口 -->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home-",
  data() {
    return {
      at: 0,
      tag: "欢迎页",
      tags: [
        { name: "用户", type: "" },
        { name: "厂库", type: "" },
      ],
      NavMenu: [
        {
          id: "",
          name: "入库记录",
          menuList: {
            id: "",
            name: "",
            parentId: "",
            url: "",
          },
        },
      ],
    };
  },
  methods: {
    switchTag(index, item) {
      console.log(index, item);
    },
    tagClose(index) {
      console.log(index);
    },
    shwIdex(index) {
      console.log(index.index);
    },
    checkSystem() {
      this.$store.dispatch("isShow", true);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    //发送请求

    (async function () {
      const data = await axios({
        method: "GET",
        url: "//me/menus",
      });
      // .then((result) => {
      //   console.log(result.data.data);
      // })

      for (let index = 0; index < data.data.data.length; index++) {
        console.log(data.data.data[index]);
      }
    })();
    this.$message({
      message: "登录成功...",
      type: "success",
      duration: 1500,
    });
  },
};
</script>

<style leng="scss" scoped>
.HomeBox {
  z-index: 1000;
  width: 100%;
  height: 100vh;
  position: absolute;
}
.el-header {
  background-color: white;
  padding: 0 0;
}
.contents {
  height: calc(100vh - 60px);
}
.el-aside {
  background-color: #0080c9;
}
.left-box {
  height: 100px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 150px;
}
.wh-60 {
  width: 68px;
  height: 60px;
  border-right: 2px solid red;
  line-height: 60px;
  cursor: pointer;
  font-size: 40px;
  margin-left: 10px;
}
.logo {
  height: 60px;
  width: 100px;
  background: url(../../assets/sm.png) 30px 12px / auto 36px no-repeat;
}
.lp4 {
  letter-spacing: 2px;
  color: #0080c9;
}
/* 啦啦啦 */
.el-row {
  margin-bottom: 2px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  height: 60px;
}
.bg-purple-light {
  height: 60px;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
/* 下拉 */
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
