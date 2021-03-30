<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-17 13:48:46
 * @LastEditTime: 2019-09-21 12:45:53
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div id="app" style="width:100%;height:100%;">
    <!-- <keep-alive v-if="$route.meta.keepAlive"> -->
        <router-view v-if="isRouterAlive" />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import VueAudio from './components/VueAudio'
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    }
  },
  data(){
    return {
      isRouterAlive: true,
      audios: [
        // {
        //   url: 'http://65.ierge.cn/12/186/372266.mp3',
        //   controlList: 'onlyOnePlaying'
        // },
        // {
        //   url: 'http://65.ierge.cn/12/186/372266.mp3',
        //   controlList: 'noDownload noMuted onlyOnePlaying'
        // }, {
        //   url: 'http://65.ierge.cn/12/186/372266.mp3',
        //   controlList: 'noDownload noVolume noMuted onlyOnePlaying'
        // }, 
        {
          url: 'http://65.ierge.cn/12/186/372266.mp3',
          controlList: 'noDownload noSpeed onlyOnePlaying'
        }
      ]
    }
  },
  created() {
    this.resize();
  },
  mounted() {
    const that = this;
    window.onresize = that.resize;
  },
  methods: {
    resize: function() {
      var body = document.getElementsByTagName("body")[0];
      var html = document.getElementsByTagName("html")[0];
      var width = html.clientWidth;
      var height = html.clientHeight;
      var max = width > height ? width : height;
      var min = width > height ? height : width;
      body.style.width = max + "px";
      body.style.height = min + "px";
      // console.log(max, min);
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components:{
    VueAudio
  },
};
</script>

<style lang="less">
@rem: 128rem;

@media screen and (orientation: portrait) {
  /*竖屏样式*/
  body {
    transform-origin: 0 0;
    transform: rotateZ(90deg) translateY(-100%);
  }
}
@media screen and (max-width: 1920px) {
  .main {
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 1920px) {
  .main {
    margin: 0 auto;
    width: 1920/@rem;
    height: 1080/@rem;
  }
}
/*移动端页面适配*/
@media only screen and (min-aspect-ratio: ~'1334/600'){
	.mb-box{
		transform: scale(0.85);
    position: relative;
  }
}
.main {
  background-color: #fff;
  /*background: url('../assets/images/new_safetybanner.jpg')no-repeat center center;*/
  /*background-size:100% 100%;*/
  overflow: hidden;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.ivu-tooltip-rel {
  display: inline;
}
.ivu-slider-bar {
  height: 0.11rem;
}
.ivu-slider-bar{
  background: transparent;
}
.ivu-slider-wrap {
  width:100% !important;
  height: 0.21rem;
  color: #ffffff;
  background: #ffffff;
  border-radius: 5px;
}
.ivu-slider-button{
  width: 0 !important;
  height: 0 !important;
  border: none;
}
.ivu-slider-button-wrap{
  top:0;
  width: 0 !important;
  height: 0 !important;
  transform: translateX(-50%);
}

// .ivu-slider-button {
//   width: 0.2rem;
//   height: 0.2rem;
//   border: 2px solid #ffffff;
// }
// .ivu-slider-button-wrap {
//   width: 62/@rem;
//   height: 55/@rem;
//   top: -0.04rem;
// }
#app {
  position: relative;
}
.audio {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%
}
</style>

