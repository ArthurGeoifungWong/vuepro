<template lang="html">
    <div class="searchlist">
        <h3>{{ky}}</h3>
        <p>{{abstract}}</p>
    </div>
</template>

<script>
export default {
  name: 'searchlist',
  data(){
    return {
      abstract:"",
      ky:this.$route.params.id//html文档{{$route.params.id}}，js里面要带this
    }
  },
  mounted:function(){
        this.$http.jsonp('http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key='+this.ky+'&bk_length=600', {}, {
              headers: {

              },
              emulateJSON: true
          }).then(function(response) {
        // 这里是处理正确的回调

              this.abstract = response.data.abstract

          // this.articles = response.data["subjects"] 也可以

          }, function(response) {
          // 这里是处理错误的回调
              console.log(response)
          });
  }
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
