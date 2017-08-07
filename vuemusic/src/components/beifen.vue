<!-- index -->
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
      lists:[],
      ky:''
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
  },
  methods:{
    watch:function(mvid){
        this.$router.push({name:'mvlist',params:{id:mvid}});
    },
    search:function(){
      // if(ev.keyCode=='13')
        // alert(1)
        // this.$router.push({name:'mvky',params:{mvky:mvky}});
        this.$http.get('https://api.imjad.cn/cloudmusic/?type=search&search_type=1004&s='+this.ky+'&offset=0', {}, {
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
}
</script>

<style lang="css">
*{margin: 0px;padding: 0px;}
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


<!-- watch -->
<template lang="html">
  <div class="videobox">
<!-- tiaozhanle
<p>{{mvid}}</p> -->
    <!-- <video v-bind:poster="mvpo" src="http://v4.music.126.net/20170805135848/4d91333e243b34802792c7b97c6816fb/web/cloudmusic/IDIwYDEkMTAwNjEgICIwMQ==/mv/148060/6001d98c6d97188cc13a1e39cc253ec4.mp4"></video> -->
    <!-- <video controls webkit-playsinline playsinline v-bind:poster="mvpo">
      <source v-bind:src="mvsrc" type="video/mp4">
    </video> -->
    <video :src="mvsrc" controls :poster="mvpo">

    </video>
    <div class="">
      <p class="mvsong">{{song}}</p>
      <p class="mvinfor"><span class="singer">歌手：{{singer}}</span><span class="mvcount">播放量：{{count}}</span></p>
    </div>
    <!-- <video controls webkit-playsinline playsinline >
      <source src='http://v4.music.126.net/20170805141701/41d34557a677545439922c6770ce3e70/web/cloudmusic/IDIwYDEkMTAwNjEgICIwMQ==/mv/148060/6001d98c6d97188cc13a1e39cc253ec4.mp4' type="video/mp4">
    </video> -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      mvid:this.$route.params.mvid,
      mvsrc:'',
      mvpo:'',
      song:'',
      singer:'',
      count:''
    }
  },
  mounted:function(){
    console.log(this.mvid);
    var src='https://api.imjad.cn/cloudmusic/?type=mv&id='+this.mvid+'&br=128000';
      this.$http.get(src, {}, {
  // this.$http.jsonp('https://api.imjad.cn/cloudmusic/?type=mv&id='+this.mvid, {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
    // 这里是处理正确的回调
    document.getElementsByTagName('vedio').crossOrigin="*";
    this.mvpo=response.data.data.cover;
    this.song=response.data.data.name;
    this.singer=response.data.data.artistName;
    this.count=response.data.data.playCount;
    this.mvsrc=response.data.data.brs[720];
    // this.mvsrc="http://v4.music.126.net/20170805135848/4d91333e243b34802792c7b97c6816fb/web/cloudmusic/IDIwYDEkMTAwNjEgICIwMQ==/mv/148060/6001d98c6d97188cc13a1e39cc253ec4.mp4";
    console.log(response.data.data.brs[480]);
      // this.articles = response.data["subjects"] 也可以

      }, function(response) {
      // 这里是处理错误的回调
          console.log(response)
      });
  }
}
</script>

<style lang="css">
video{
  width: 100%;
}
.mvsong{
  text-align: left;
  text-indent: 2%;
}
.mvinfor{
  text-align: left;
  overflow: hidden;
}
.singer{
  /*text-align: left;*/
  font-size: 12px;
  color: blue;
  float: left;
  margin-left: 2%;
}
.mvcount{
  /*text-align: right;*/
  font-size: 10px;
  float: right;
  margin-right: 2%;
}
</style>
