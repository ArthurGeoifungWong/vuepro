<template lang="html">
  <div class="">

  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[],
      
    }
  },
  mounted:function(){
      this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&search_type=1004&s=countingstars&offset=0', {}, {
  // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
    // 这里是处理正确的回调

          this.lists = response.data.result.mvs;

          console.log(response.data.result.mvs)
      // this.articles = response.data["subjects"] 也可以

      }, function(response) {
      // 这里是处理错误的回调
          console.log(response)
      });
  }
}
</script>

<style lang="css">

</style>
