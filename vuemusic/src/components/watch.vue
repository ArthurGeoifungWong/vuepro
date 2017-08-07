<template lang="html">
  <div class="videobox">
    <video :src="mvsrc" controls :poster="mvpo"></video>
    <div class="">
      <p class="mvsong">{{song}}</p>
      <p class="mvinfor"><span class="singer">歌手：{{singer}}</span><span class="mvcount">播放量：{{count}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mvid:this.$route.params.id,
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
*{margin: 0px;padding: 0px;font-family: 'Avenir', Helvetica, Arial, sans-serif;}
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
