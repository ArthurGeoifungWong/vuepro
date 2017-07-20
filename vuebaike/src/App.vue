<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <h2>Search Something</h2>
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <!-- <div class="">
      <input type="text" name="" value="" v-model="sth" v-bind:placeholder="pl">
      <input type="button" name="" value="search" @click="find">
    </div>
    <p>{{abstract}}</p> -->
    <router-view></router-view>
    <router-link v-bind:to="'/search'" v-if="test()"><p>feedback</p></router-link>
    <p>By Kuifung Wong.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val:this.$route.params.id
      // sth:"",
      // abstract:"",
      // pl:"please input."
    }
  },
  methods:{
    test:function(){
      console.log(this.$route.params.id);
      console.log(this.$route.params.id==null);
      return this.$route.params.id!=null;//undefined==null,true
    }
  }
  // methods:{
  //   find:function(){
  //     this.$http.jsonp('http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key='+this.sth+'&bk_length=600', {}, {
  //           headers: {
  //
  //           },
  //           emulateJSON: true
  //       }).then(function(response) {
  //     // 这里是处理正确的回调
  //
  //           this.abstract = response.data.abstract
  //       // this.articles = response.data["subjects"] 也可以
  //           this.pl=this.sth
  //       }, function(response) {
  //       // 这里是处理错误的回调
  //           console.log(response)
  //       });
  //   }
  // }
}
</script>

<style lang="scss">
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
@media screen and (min-width:1200px){
  html{
    font-size: 16px;
  }
}
@media screen and (min-width:968px) and (max-width:1199px){
  html{
    font-size: 18px;
  }
}
@media screen and (min-width:648px) and (max-width:967px){
  html{
    font-size: 20px;
  }
}
@media screen and (min-width:319px) and (max-width:647px){
  html{
    font-size: 22px;
  }
}
</style>
