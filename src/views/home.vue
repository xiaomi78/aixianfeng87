<template>
  <div id="home">
    <Search></Search>
    <h2>我是home页</h2>
    <Tab></Tab>
  </div>
</template>
<script>
  import Search from  '../components/search'
  import Tab from  '../components/table'
  export default {
    name: 'home',
    components:{
      Search,Tab
    }
  }
</script>
<style>

</style>
