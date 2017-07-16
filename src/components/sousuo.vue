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
        active:true,
        active1:false
      }
    },
    mounted(){
      this.active= localStorage.getItem("name");
      this.active1=localStorage.getItem("name1");
      console.log(this.active, this.active1)
    },
    methods:{

    }
  }
</script>

<style scoped>
.sou{text-align: left;font-size: .3rem;padding:.2rem; }
</style>
