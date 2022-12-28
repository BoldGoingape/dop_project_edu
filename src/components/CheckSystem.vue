<template>
  <div class="moneBox" style="width: 550px; background-color: white">
    <div style="display: flex; background-color: #0080c9" class="Tiele">
      <h4 style="margin-left: 5px">提示</h4>
      <h4 style="margin-left: 90%; cursor: pointer" @click="isShow">X</h4>
    </div>
    <el-row>
      <el-col :span="8" v-for="(item, index) in 6" :key="index">
        <el-card style="margin: 5px 5px">
          <img
            :src="systemItems[index].iconUrl"
            class="image"
            @click="inSys(index)"
          />
          <div style="padding: 1px; text-align: center">
            <span>{{ systemItems[index].title }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import system_01 from "../../assets/images/system_01.png";
import system_02 from "../../assets/images/system_02.png";
import system_03 from "../../assets/images/system_03.png";
import system_04 from "../../assets/images/system_04.png";
import system_05 from "../../assets/images/system_05.png";
import system_06 from "../../assets/images/system_06.png";
export default {
  name: "Checksystem-",
  data() {
    return {
      sltSystem: "login",
      systemItems: [
        {
          id: 1,
          sys: "cangchu",
          title: "仓储系统",
          iconUrl: system_01,
        },
        {
          id: 2,
          sys: "baobiao",
          title: "报表引擎",
          iconUrl: system_02,
        },
        {
          id: 3,
          sys: "wenjuan",
          title: "问卷系统",
          iconUrl: system_03,
        },
        {
          id: 4,
          sys: "wenjuan",
          title: "系统配置",
          iconUrl: system_04,
        },
        {
          id: 5,
          sys: "rex",
          title: "REX配置",
          iconUrl: system_05,
        },
        {
          id: 6,
          sys: "xietong",
          title: "管理协同",
          iconUrl: system_06,
        },
      ],
    };
  },
  methods: {
    isShow() {
      this.$store.dispatch("isShow", false);
    },
    inSys(index) {
      if (index == 0) {
        this.$store.dispatch("isShow", false);
        this.$router.push({
          path: "/Home",
        });
      } else {
        this.open3();
      }
    },
    open3() {
      this.$message({
        message: "目前仅开放仓储系统...",
        type: "warning",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  display: block;
}
.moneBox {
  position: absolute;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  top: 250px;
  left: 35%;
  z-index: 855999;
}
.Tiele {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
