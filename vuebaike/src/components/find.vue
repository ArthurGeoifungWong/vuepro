<template lang="html">
  <div class="search">
    <div class="">
      <input type="text" name="" value="" v-model="sth" v-bind:placeholder="pl">
      <input type="button" name="" value="search" @click="find">
    </div>
    <h3>{{title}}</h3>
    <p>{{abstract}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sth:"",
      abstract:"",
      pl:"please input.",
      title:""
    }
  },
  methods:{
    find:function(){
          this.$http.jsonp('http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key='+this.sth+'&bk_length=600', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
          // 这里是处理正确的回调

                this.abstract = response.data.abstract
            // this.articles = response.data["subjects"] 也可以
                this.pl=this.sth
                this.title=this.sth
            }, function(response) {
            // 这里是处理错误的回调
                console.log(response)
            });
    }
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
