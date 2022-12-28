<template>
  <div>
    <div style="height: 80px">
      <!-- <img src="../../public/img/logo.png" alt="" /> -->
      <el-row>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <div class="demo-image__placeholder">
              <div class="block">
                <el-image
                  :src="src"
                  style="width: 100%; height: 100%"
                ></el-image>
              </div>
            </div>
          </div>
          <!-- <img src="../../public/img/logo.png" alt="" /></div -->
        </el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>
    <!-- 中间 -->
    <div class="box">
      <div class="box-tex">
        <h3>立足行业标杆方案</h3>
        <h3>解决企业个性问题</h3>
        <el-divider></el-divider>
        <p>
          在行业标杆的规范基础上，针对企业自身特点，建立的数字化、透明化、协同化运营管理体系，满足企业快速发展的需求。
        </p>
      </div>
      <div class="login loginBox">
        <div class="login_title">
          <span>管理员登录</span>
        </div>
        <form
          class="ui large form"
          method="post"
          action="#"
          th:action="@{/admin/login}"
        >
          <div class="login_fields">
            <div class="login_fields__user">
              <div class="icon">
                <img alt="" src="img/user_icon_copy.png" />
              </div>
              <input
                name="username"
                placeholder="用户名"
                maxlength="16"
                type="text"
                autocomplete="off"
                v-model="userName"
              />
              <div class="validation">
                <img alt="" src="img/tick.png" />
              </div>
            </div>
            <div class="login_fields__password">
              <div class="icon">
                <img alt="" src="img/lock_icon_copy.png" />
              </div>
              <input
                name="password"
                placeholder="密码"
                maxlength="16"
                type="password"
                autocomplete="off"
                v-model="passWord"
              />
              <div class="validation">
                <img alt="" src="img/tick.png" />
              </div>
            </div>
            <div class="login_fields__password">
              <div class="icon">
                <img alt="" src="img/key.png" />
              </div>
              <input
                name="code"
                placeholder="验证码"
                maxlength="4"
                type="text"
                autocomplete="off"
              />
              <div
                class="validation"
                style="opacity: 1; right: -5px; top: -3px"
              >
                <!-- <canvas class="J_codeimg" id="myCanvas" onclick="Code();"
                >对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas
              > -->
              </div>
            </div>
            <div class="login_fields__submit" @click="open4">
              <input type="button" value="登录" />
            </div>
          </div>
        </form>
        <div class="success"></div>
        <div class="disclaimer">
          <!-- <p>欢迎登陆后台管理系统</p> -->
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <el-row>
        <el-col :span="3"><div class="grid-contentt bg-purple"></div></el-col>
        <el-col :span="9">
          <div class="grid-contentt bg-purple">
            <div class="des-items">
              <figure>
                <i class="iconfont icon-myicon-"></i>
                <figcaption>数据整合</figcaption>
              </figure>
              <figure>
                <i class="iconfont icon-xietongbangong"></i>
                <figcaption>流程协同</figcaption>
              </figure>
              <figure>
                <i class="iconfont icon-shuju"></i>
                <figcaption>体系诊断</figcaption>
              </figure>
              <figure>
                <i class="iconfont icon-qiye"></i>
                <figcaption>企业升级</figcaption>
              </figure>
            </div>
          </div>
        </el-col>
        <el-col :span="1"><div class="grid-contentt bg-purple"></div></el-col>
        <el-col :span="3"
          ><div class="grid-contentt bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-contentt bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-contentt bg-purple-light"></div
        ></el-col>
      </el-row>
      <div style="text-align: center; color: white">
        <span style="margin-right: 15px">Copyright(C)2020</span>
        <span style="margin-right: 15px">数易智慧@2020</span>
        <span style="margin-right: 15px">ICP备12003508号-15</span>
        <span style="margin-right: 15px">公安备12003508号-15</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import axios from "axios";
import img from "../../public/img/logo.png";
export default {
  data() {
    return {
      src: img,
      userName: "",
      passWord: "",
    };
  },
  methods: {
    async login() {},
    open4() {
      axios({
        url: `/sys/login?userName=${this.userName}&userPsw=${this.passWord}`,
        method: "POST",
      })
        .then((result) => {
          console.log(result.data.data);
          if (result.data.code === 200) {
            this.$store.dispatch("isShow", true);
            sessionStorage.setItem("token", result.data.data.token);
          } else {
            this.$message({
              message: "用户名或密码错误，登录失败！",
              duration: 1000,
              type: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    //数据请求
    axios.defaults.timeout = 3000;
    axios.defaults.baseURL = "http://121.89.192.46:7777";
    // (async function () {
    //   const datas = axios({
    //     url: "/sys/login?userName=chengxue1&userPsw=chengxue",
    //     method: "POST",
    //   });
    //   const UserState = await datas;
    //   console.log(UserState);

    // })();\
  },
};
</script>
<link href="../../public/css/default.css" rel="stylesheet" type="text/css" />
<!--必要样式-->
<link href="../../public/layui/css/layui.css" type="text/css" />
<link href="../../public/css/styles.css" rel="stylesheet" type="text/css" />
<link href="../../public/css/demo.css" rel="stylesheet" type="text/css" />
<link href="../../public/css/loaders.css" rel="stylesheet" type="text/css" />
<style
  src="../../public/css/styles.css"
  rel="stylesheet"
  type="text/css"
></style>
<style scoped>
.image {
  width: 100%;
  display: block;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #0080c9;
}
.bg-purple-light {
  background: #0080c9;
}
.grid-content {
  min-height: 80px;
}
.box {
  position: absolute;
  top: 8px;
  height: 670px;
  width: 100%;
  z-index: 1;
  /* background-color: red; */
}
.box-tex {
  position: absolute;
  top: 200px;
  left: 250px;
  width: 550px;
  line-height: 1.6;
  letter-spacing: 4px;
}
.box-tex h3 {
  font-size: 26px;
}
.box-tex p {
  color: black;
}
.el-divider {
  background-color: #000;
  height: 2px;
}
.body {
  opacity: 0.5;
  z-index: -1001;
}

.des-items {
  display: flex;
  align-items: center;
  height: 120px;
  color: white;
}
.grid-contentt {
  min-height: 120px;
}
.des-items.figure {
  height: 120px;
  margin-right: 90px;
  color: white;
}
figcaption {
  margin-top: 10px;
  width: 70px;
}
</style>
