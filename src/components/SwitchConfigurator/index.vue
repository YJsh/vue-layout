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
    /*text-align: center;*/
    color: #2c3e50;
  }
  body {
    margin: 20px;
  }
</style>
