# dop-project-wwj

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

````html
<div style="height: 80px">
  <!-- <img src="../../public/img/logo.png" alt="" /> -->
  <el-row>
    <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="src" style="width: 100%; height: 100%"></el-image>
          </div>
        </div>
      </div>
      <!-- <img src="../../public/img/logo.png" alt="" /></div -->
    </el-col>
    <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
</div>

```html
<div class="box">
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
            value="slcp"
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
            value="123456"
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
          <div class="validation" style="opacity: 1; right: -5px; top: -3px">
            <!-- <canvas class="J_codeimg" id="myCanvas" onclick="Code();"
                >对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas
              > -->
          </div>
        </div>
        <div class="login_fields__submit">
          <input type="button" value="登录" />
        </div>
      </div>
    </form>
    <div class="success"></div>
    <div class="disclaimer">
      <p>欢迎登陆后台管理系统</p>
    </div>
  </div>
</div>
```
````
