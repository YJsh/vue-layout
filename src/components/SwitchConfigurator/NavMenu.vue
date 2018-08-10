<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="logo">
      <a href="">
        <img src="../../assets/v-layout.png" style="width: 150px">
      </a>
    </el-menu-item>

    <el-menu-item>
      <el-input size="medium" style="width: 300px">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-menu-item>

    <el-submenu index="2" style="float: right">
      <template slot="title">
        <span v-if="userName">{{ userName }}</span>
        <span v-else>登录</span>
      </template>
      <el-menu-item index="logout"><i class="el-icon-close"></i>注销</el-menu-item>
    </el-submenu>
    <el-menu-item index="/readme" style="float: right">文档说明</el-menu-item>
    <el-menu-item index="/auth" style="float: right">权限控制</el-menu-item>
    <el-menu-item index="/dedicated" style="float: right">专服配置</el-menu-item>
    <el-menu-item index="/preset" style="float: right">预设配置</el-menu-item>
    <el-menu-item index="/switches" style="float: right">开关管理</el-menu-item>
    <el-submenu index="project" style="float: right">
      <template slot="title">
        <span v-if="curProject">{{ curProject }}</span>
        <span v-else>选择项目</span>
      </template>
      <el-menu-item v-for="project in projects" :key="project" :index="project">{{ project }}</el-menu-item>
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
        if("project" === keyPath[0]) {}
        else if("logout" === key) {}
        else if("logo" !== key) {
          this.$router.push(key);
        }
      }
    }
  }
</script>

<style scoped>
  .el-menu--horizontal {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
  }
  .el-input >>> input {
    border-radius: 20px;
  }
</style>
