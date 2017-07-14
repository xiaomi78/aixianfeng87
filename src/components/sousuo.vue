<template>

  <div id="sousuo">
    <Search></Search>
  <p class="sou">热门搜索</p>
  </div>
</template>

<script>
  import Search from  '../components/search'
  export default {
    name: 'sousuo',
    components:{
      Search
    },
    created: function () {

    },
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style scoped>
.sou{text-align: left;font-size: .3rem;padding:.2rem; }
</style>
