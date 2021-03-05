<template>
  <div class="main">
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/commonImg/anibg2.png" />
      <div class="mb-box">
        <div class="canvas">
          <div class="canvasMain">
            <iframe :src="iframeUrl"></iframe>
          </div>
          <img src="../../../assets/images/level1/course9/day2-p3-img1.png" alt="" />
        </div>
        <div class="audio">
          <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
            :routerUrl="router"  :menuList="menuList" :titleCurr="3" />
        </div>
        <div class="page3-content">
          <div class="content">
            <div ref="right1" @click="beginMusicAndEnd('right1', 1)" class="each-pic pic1">
              <img src="../../../assets/images/commonImg/circle1.png" alt="" />
            </div>
            <div ref="right2" @click="beginMusicAndEnd('right2', 2)" class="each-pic pic2">
              <img src="../../../assets/images/commonImg/circle2.png" alt="" />
            </div>
            <div ref="right3" @click="beginMusicAndEnd('right3', 3)" class="each-pic pic3">
              <img src="../../../assets/images/commonImg/circle3.png" alt="" />
            </div>
            <div ref="right4" @click="beginMusicAndEnd('right4', 4)" class="each-pic pic4">
              <img src="../../../assets/images/commonImg/circle4.png" alt="" />
            </div>
            <div ref="right5" @click="beginMusicAndEnd('right5', 5)" class="each-pic pic5">
              <img src="../../../assets/images/commonImg/circle5.png" alt="" />
            </div>
            <div ref="right6" @click="beginMusicAndEnd('right6', 6)" class="each-pic pic6">
              <img src="../../../assets/images/commonImg/circle6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="xiong">
        <img src="../../assets/images/xiong/B/p4.png" alt />
      </div> -->
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../components/lookCircleMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        iframeUrl: "",
        //视频隐藏
        isShowVideo: "isShowVideo",
        audios: {
          url: "./static/mp3/level1/level1-09.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
         menuList:[//右侧菜单
          {
            routerUrl:'course1day3Page1',
            imgSrc:require('../../../assets/images/Vocabulary.png')
          },
          {
            routerUrl:'course1day3Page2',
            imgSrc:require('../../../assets/images/Look.png')
          }, 
          {
            routerUrl:'course1day3Page3',
            imgSrc:require('../../../assets/images/Look.png')
          },{
             routerUrl:'index',
             imgSrc:require('../../../assets/images/MenuText.png')
          }
        ],
        playtime: {
          time: 87,
          randem: Math.random(1000)
        },
        router: "/index",
        musicTimeList: {
          right1: {
            beginTime: 91.2,
            endTime: 3
          },
          right2: {
            beginTime: 96.5,
            endTime: 3
          },
          right3: {
            beginTime: 102.4,
            endTime: 3
          },
          right4: {
            beginTime: 108.2,
            endTime: 3
          },
          right5: {
            beginTime: 114,
            endTime: 3
          },
          right6: {
            beginTime: 119.8,
            endTime: 3
          }
        },
        timerList: []
      };
    },
    mounted() {
      if (this.IsPC()) {
        this.iframeUrl = './static/draw/index.html';
      } else {
        this.iframeUrl = "./static/draw/index_mobile.html";
      }
      let that = this;
      let playTime = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(playTime);
      }, 10);
      let stopTime = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(stopTime);
      }, 3200);
    },
    methods: {
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

        //console.log("传入的数据：", index);
        that[item + "MoreShow"] = true;
        if (index != undefined) {
          that.$refs["right" + index].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs["right" + index].style.animation = "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer);
          }, 10);

          // that.$refs["right" + index].style.opacity = "1";
        }
        this.playtime.randem = Math.random(1000);
        this.playtime.time = this.musicTimeList[item].beginTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      },
      //开始播放
      onPlayerPlay(a) {
        this.playtime.randem = Math.random(1000);
        this.playtime.time = "176.494";
        this.$refs.audioss.startPlay();
        let stopTT = window.setTimeout(() => {
          this.$refs.audioss.pausePlay();
          clearTimeout(stopTT);
        }, 18730);
      },
      onPlayerEnded(a) {
        this.isShowVideo = "isShowVideo1";
      },
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../assets/css/index";
  @rem: 128rem;

  .isShowVideo {
    display: block;
  }

  .isShowVideo1 {
    display: none;
  }

  .video-player {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;
  }

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .main {
    width: 100%;
    height: 100%;
  }

  .canvas {
    animation: zoomIn 1s 1s both;
    position: absolute;
    width: 1322 / @rem;
    height: 742 / @rem;
    top: 205/ @rem;
    left: 260/@rem;
    background-image: url("../../../assets/images/commonImg/photoKuang6.png");
    background-size: 100% 100%;
    display: flex;
    justify-items: center;
    z-index: 3;
    padding: 0.5rem;
    box-sizing: border-box;
    img {
      position:absolute;
      z-index:3;
      pointer-events: none;
      top:0;left:0;width:1322/@rem;height:742/@rem;
    }
    .canvasMain {
      width: 1127/@rem;
      height: 650/ @rem;
    }

  }

  .canvasMain {
    position: relative;
    width: 100%;
    height: 100%;

    .con-pic {
      width: 100%;
      height: auto;
      .pos-a(10, 10, 3);
    }

    &::after {
      position: relative;
    }

  }

  .page3-content {
    position: absolute;
    width: 149/@rem;
    height: 672/@rem;
    top: 205/@rem;
    left: 1572/@rem;
    z-index: 5;
    animation: rollIn 1s 1s both;
    .content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      .each-pic {
        width: 149 / @rem;
        height: 95 / @rem;
        cursor:pointer;
        img {
          display: block;
        }
      }
    }

  }

  .bg-div {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/commonImg/page3bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .audio {
      width: 100%;
      height: 0.31rem;
      margin-bottom: 0.1rem;
    }
    .animate-bg {
      .scale(532, 432);
      .pos-a(540, 0, 5);
      opacity: 0;
      animation: zoomIn 1s both;
    }

  }
</style>
