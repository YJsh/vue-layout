<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="logo">
      <a href="">
        <!--<img src="../assets/pangu_test_black.png" style="width: 140px">-->
      </a>
    </el-menu-item>
    <el-submenu index="project">
      <template slot="title">
        <span v-if="curProject">{{ curProject }}</span>
        <span v-else>选择项目</span>
      </template>
      <el-menu-item v-for="project in projects" :key="project" :index="project">{{ project }}</el-menu-item>
    </el-submenu>
    <el-menu-item index="/switches">开关管理</el-menu-item>
    <el-menu-item index="/preset">预设配置</el-menu-item>
    <el-menu-item index="/dedicated">专服配置</el-menu-item>
    <el-menu-item index="/project">项目管理</el-menu-item>
    <el-menu-item index="/auth">权限控制</el-menu-item>
    <el-menu-item index="/readme">文档说明</el-menu-item>
    <el-submenu index="2" style="float: right">
      <template slot="title">
        <span v-if="userName">{{ userName }}</span>
        <span v-else>登录</span>
      </template>
      <el-menu-item index="logout"><i class="el-icon-close"></i>注销</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        projects: [],
        curProject: "",
        userName: "",
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if("project" === keyPath[0]) {
          api.post("/changeProject", {"project": key}).then(response => {
            this.curProject = key;
            bus.$emit("changeProject");
          });
        }
        else if("logout" === key) {
          api.post("/logout");
        }
        else if("logo" !== key) {
          this.$router.push(key);
        }
      }
    }
  }
</script>

<style scoped>
  /*.el-menu-item {*/
    /*font-size: 16px;*/
  /*}*/
  /*.el-menu--horizontal >>> .el-submenu__title {*/
    /*font-size: 16px;*/
  /*}*/
</style>
