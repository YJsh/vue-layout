<template>
  <div id="index">
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from "./NavMenu";
  export default {
    name: "index",
    components: {NavMenu}
  }
</script>

<style scoped>
  #index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-sizing: border-box;
    /*padding: 0 20px;*/
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
