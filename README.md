# vuepro
vue.js pros.

1.查询百科<br/>
（接百度百科API，获取简介，vue-cli构建打包，vue-router设置路由，vue-resource网络请求。）<br/>
/find 单页域名无变化，/search 网页查询跳转。<br/>

2.MV搜索观看<br/>
（接网易云音乐API，获取简介，vue-cli构建打包，vue-router设置路由，vue-resource网络请求，vuex状态设置。）<br/>
两个bug：1.在mv页面刷新后返回并没有返回到当前搜索页，即搜索关键字重置，这里用了浏览器的localstorage暂时解决；2.有些mv没办法播放，这里可能跟api限制有关，如果是跨域问题，需要后台处理，但并没有后台。。。<br/>

<h1>PS:下载之后把build文件夹名改为dist，然后在该目录下cmd启动终端，输入指令npm install安装所需依赖。</h1><br/>


