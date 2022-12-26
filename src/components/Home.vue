<template>
  <div class="HomeBox">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home-",
};
</script>

<style leng="scss" scoped>
.HomeBox {
  z-index: 1000;
  height: 100%;
  width: 100%;
  position: absolute;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 150px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 100%;
}
</style>
