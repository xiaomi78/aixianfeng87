<template>
  <div id="app">
    <div id="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
  mounted(){

  },
}
</script>
<style src="./assets/reset.css"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app{height: 90%;width: 100%;background: #F2F5F8;}
</style>
