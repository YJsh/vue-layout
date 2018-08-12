<template>
  <div style="display: flex; flex-direction: column; flex-shrink: 0; color: black;">
    <h3>【私服】</h3>
    <el-checkbox-group v-model="selected">
      <div v-for="(num, index) in internal" :key="index">
        <div v-for="i in num" :key="index*4+i">
          <el-checkbox :label="i">{{i}}服服务器名</el-checkbox>
        </div>
      </div>
    </el-checkbox-group>

    <h3>【在线服务器】</h3>
    <el-checkbox-group v-model="selected">
      <div v-for="(num, index) in online" :key="index">
        <div v-for="i in num" :key="index*4+i">
          <el-checkbox :label="i">{{i}}服服务器名</el-checkbox>
        </div>
      </div>
    </el-checkbox-group>


    <h3>【预设配置】</h3>
    <el-checkbox-group v-model="selected">
      <div v-for="(num, index) in preset" :key="index">
        <div v-for="i in num" :key="index*4+i">
          <el-checkbox :label="i">{{i}}服服务器名</el-checkbox>
        </div>
      </div>
    </el-checkbox-group>

  </div>
</template>

<script>
  export default {
    name: "ServerList",
    data() {
      return {
        selected: [],
        online: [32, 32, 31, 31],
        // online: [12, 12, 11, 11],
        internal: [6, 6, 6, 5],
        preset: [1, 1]
      }
    }
  }
</script>

<style scoped>
  .el-checkbox-group {
    display: flex;
    margin-bottom: 12px;
  }
  .el-checkbox {
    margin: 2px 10px;
    width: 120px;
    color: black;
  }
  h3 {
    margin: 0 0 12px;
  }
</style>
