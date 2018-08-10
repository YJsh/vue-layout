<template>
  <div style="display: flex; flex-direction: column; flex: auto;">
    <!--<div style="display: flex; flex: auto; justify-content: space-around;">-->
    <!--&lt;!&ndash;<div style="display: flex; flex: auto; justify-content: space-around; background: #5cb793">&ndash;&gt;-->
      <!--<div style="display: flex; flex-direction: column; align-items: center; width: 960px">-->
        <!--<el-input size="medium" style="width: 300px">-->
          <!--<i slot="suffix" class="el-input__icon el-icon-search"></i>-->
        <!--</el-input>-->

        <!--<div style="display: flex; align-items: center">-->
          <!--<el-tabs type="border-card" style="flex: auto">-->
            <!--<el-tab-pane label="总览"></el-tab-pane>-->
            <!--<el-tab-pane label="服务器1"></el-tab-pane>-->
            <!--<el-tab-pane label="服务器1"></el-tab-pane>-->
            <!--<el-tab-pane label="服务器1"></el-tab-pane>-->
            <!--<el-tab-pane label="服务器1"></el-tab-pane>-->
          <!--</el-tabs>-->
          <!--<el-button>服务器列表</el-button>-->
        <!--</div>-->
        <!--<el-table :data="switches" size="small" border height="50%">-->
          <!--<el-table-column prop="name" label="配置" width="220" sortable></el-table-column>-->
          <!--<el-table-column prop="desc" label="描述" width="240"></el-table-column>-->
          <!--<el-table-column prop="sync" label="客户端同步" width="100"></el-table-column>-->
          <!--<el-table-column label="类型" width="90"></el-table-column>-->
          <!--<el-table-column prop="value" label="值"></el-table-column>-->
        <!--</el-table>-->
      <!--</div>-->
        <!--<div style="display:flex; flex-direction: column; padding: 100px 30px;">-->
        <!--<h2>服务器列表</h2>-->
        <!--<div style="flex: auto; overflow: auto">-->
        <!--<server-list></server-list>-->
        <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <div style="flex: auto; display: flex; flex-direction:column; align-items: center; background: #00e1ac">
      <el-input size="large" style="width: 500px; margin: 40px">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div style="display: flex; padding-bottom: 40px">
        <div style="display: flex; flex-direction: column; flex-shrink: 0; width: 1000px; margin: 0 20px">
          <el-tabs type="border-card">
            <el-tab-pane label="总览"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
          </el-tabs>
          <el-table :data="switches" size="small" border height="50%">
            <el-table-column prop="name" label="配置" width="220" sortable></el-table-column>
            <el-table-column prop="desc" label="描述" width="240"></el-table-column>
            <el-table-column prop="sync" label="客户端同步" width="100"></el-table-column>
            <el-table-column label="类型" width="90"></el-table-column>
            <el-table-column prop="value" label="值"></el-table-column>
          </el-table>
        </div>
        <el-button>测试</el-button>
        <div style="display: flex; flex-direction: column; margin: 30px 20px 40px">
          <div style="flex: auto; overflow: auto">
            <server-list></server-list>
          </div>
        </div>
      </div>
    </div>
    <h1 style="margin: 18px 0 15px; text-align: center">SWITCHES</h1>
  </div>
</template>

<script>
  import ServerList from "./ServerList";
  export default {
    name: "Switches",
    components: {ServerList},
    data() {
      return {
        switches: [{name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"},{name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"},{name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"}, {name: "test"},]
      }
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    display:none;
  }
  .el-input >>> input {
    border-radius: 20px;
  }
  .el-tabs {
    border-bottom: none;
  }
  .el-tabs >>> .el-tabs__header {
    /*border-bottom: none;*/
  }
  .el-tabs >>> .el-tabs__content {
    padding: 0;
  }
</style>
