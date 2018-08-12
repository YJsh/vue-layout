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
    <div style="flex: auto; display: flex; flex-direction:column; align-items: center; padding: 60px; background: #00e1ac;" :style="{backgroundImage: bgImg}">
      <!--<el-input size="large" style="width: 500px; margin: 0 0 20px" placeholder="配置搜索...">-->
        <!--<i slot="suffix" class="el-input__icon el-icon-search"></i>-->
      <!--</el-input>-->
      <div style="display: flex; padding: 45px; background: rgba(242,243,245,0.6);">
        <div style="display: flex; flex-direction: column; flex-shrink: 0; width: 1000px;">
          <el-tabs type="border-card">
            <el-tab-pane label="总览"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
            <el-tab-pane label="服务器1"></el-tab-pane>
          </el-tabs>
          <!--<div style="display: flex; flex-direction: column; padding: 15px; background: rgb(255, 153, 153);">-->
          <div style="display: flex; flex-direction: column; border: #b9babc solid 2px; padding: 15px; background: rgb(122, 216, 143); box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);">
            <el-table :data="switches" size="mini" border stripe height="100%">
              <el-table-column prop="name" label="配置" width="220" sortable></el-table-column>
              <el-table-column prop="desc" label="描述" width="240"></el-table-column>
              <el-table-column prop="sync" label="客户端同步" width="100"></el-table-column>
              <el-table-column label="类型" width="90"></el-table-column>
              <el-table-column prop="value" label="值"></el-table-column>
            </el-table>
          </div>
          <div style="display: flex; background: white; border-left: darkgrey solid 1px; border-right: darjgret solid 1px; justify-content: flex-end">
            <el-button icon="el-icon-search" plain>模板检查</el-button>
            <el-button icon="el-icon-refresh" plain>同步</el-button>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; margin: 30px 20px 50px; padding: 10px 2px 5px; border-top: gray solid 1px; border-right: gray solid 1px; background: rgba(20, 255, 255 0.1)">
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
        bgImg: 'url(' + require('./assets/hyxdpc.png') + ')',
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
    background-color: #424242;
  }
  .el-tabs >>> .el-tabs__item.is-active {
    color: #232323;
  }
  .el-tabs >>> .el-tabs__item.is-active:hover {
    color: #232323;
  }
  .el-tabs >>> .el-tabs__item:not(.is-active):hover{
    color: #ebebeb;
  }
  .el-tabs >>> .el-tabs__content {
    padding: 0;
  }
  .el-table {
    /*border: rgb(238, 220, 220) solid 1px;*/
    border: rgb(240, 241, 243) solid 1px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
  .el-table >>> th, .el-table >>> tr {
    /*background: #f5f5f5;*/
    /*!*color: white;*!*/
    /*border: #464646;*/
  }
  .el-button {
    border: none;
  }
  .el-button+.el-button {
    margin-left: 0;
  }
</style>
