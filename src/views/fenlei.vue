<template>
  <div id="fenlei">
    <Search></Search>
    <FeiLeiBody></FeiLeiBody>
    <Tab></Tab>
  </div>
</template>
<script>
  import Search from  '../components/search'
  import Tab from  '../components/table'
  import FeiLeiBody from  '../components/feilei-body'
  export default {
    name: 'fenlei',
    components:{
      Search,Tab,FeiLeiBody
    },
  }
</script>
<style>

</style>
