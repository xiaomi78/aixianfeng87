<template>
  <div id="xiang">
fdalngaoidjgopadgjodfh
  </div>
</template>

<script>
  export default {
    name: 'xiang',
    data(){
      return {

      }
    },
    mounted: function () {
      this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=17327&_=1499951839867',{jsonp: 'callback'}).then(function (res) {
          console.log(res);
//        this.arry=res.body.value
      });
    },
  }
</script>

<style scoped>

</style>
