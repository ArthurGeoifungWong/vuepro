<template lang="html">
  <div class="topbtn">
    <input type="text" name="" v-model="ky" placeholder="搜索MV" class="search" @keyup.enter="search()">
    <!-- <input type="text" name="" value="" placeholder="搜索MV" class="search" onsubmit="search()"> -->
    <ul class="mvlist">
      <li v-for='list in lists' v-bind:data-src="list.id" @click='watch(list.id)'>
        <img v-bind:src="list.cover" v-bind:alt="list.name" class="mvimg">
        <p class="mvname">{{list.name}}</p>
        <p class="mvsinger">{{list.artistName}}</p>
        <span class="clickcount">{{list.playCount}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ky:"",
      lists:[]
    }
  },
  methods:{
    search:function(){
      this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&search_type=1004&s='+this.ky+'&offset=0', {}, {
  // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {
          },
          emulateJSON: true
      }).then(function(response) {
    // 这里是处理正确的回调
localStorage.removeItem("ky");localStorage.setItem("ky",this.ky);
          this.lists = response.data.result.mvs;
          this.$store.state.ky=this.ky;this.$store.state.ky=localStorage.getItem("ky")
          console.log(response.data.result.mvs)
      // this.articles = response.data["subjects"] 也可以
      }, function(response) {
      // 这里是处理错误的回调
          console.log(response)
      });
    },
    watch:function(mvid){
        this.$router.push({name:'mvlist',params:{id:mvid}});
    }
  },
  mounted:function(){
    this.$store.state.ky=localStorage.getItem("ky")
      this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&search_type=1004&s='+this.$store.state.ky+'&offset=0', {}, {
  // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
    // 这里是处理正确的回调

          this.lists = response.data.result.mvs;
this.ky=this.$store.state.ky;
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
*{margin: 0px;padding: 0px;font-family: 'Avenir', Helvetica, Arial, sans-serif;}
.topbtn{
  width: 100%;
  height: 40px;
  background:  red;
  text-align: center;
  line-height: 40px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 1px 2px 2px rgba(0,0,0,0.2);
}
.search{
  width: 98%;
  height: 30px;
  outline: none;
  border: 0;
  border-radius: 20px;
  text-indent: 2%;
}
ul{
  margin-top: 20px;
}
li{
  width:40%;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  position: relative;
}
.mvimg{
  width: 100%;
}
.mvname{
  font-size: 14px;
  color: grey;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: -20px;
}
.mvsinger{
  font-size: 10px;
  margin-top: -20px;
}
.clickcount{
  font-size: 10px;
  /*color: grey;*/
  color: white;
  display: inline-block;
  height: 20px;
  background: rgba(0,0,0,0.6);
  position: absolute;
  right: 0px;
  top: 0px;
  border-radius: 0px 0px 0px 10px;
  padding-left: 4px;
  padding-right: 2px;
  line-height: 20px;
}
</style>
