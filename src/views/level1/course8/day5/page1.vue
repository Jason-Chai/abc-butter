<template>
  <div class="level2-main">
    <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1">
    <div class="animate-bg" :class="{'animate-step':isPause}" ref="deer" />
    <div class="div-bg">
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="1" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>

      <div class="page2-content">
        <div class="content">
          <span class="itemTitle" ref="text1"></span>
          <span class="item item1" v-show="pageNum==1" :class="{active:activeIndex==0}" ref="text1"></span>
          <span class="item item2" v-show="pageNum==1" :class="{active:activeIndex==1}" ref="text2"></span>
          <span class="item item3" v-show="pageNum==1" :class="{active:activeIndex==2}" ref="text3"></span>
          <span class="item item4" v-show="pageNum==1" :class="{active:activeIndex==3}" ref="text4"></span>
          <span class="item item5" v-show="pageNum==1" :class="{active:activeIndex==4}" ref="text5"></span>
          <span class="item item6" v-show="pageNum==1" :class="{active:activeIndex==5}" ref="text6"></span>
          <span class="item item7" v-show="pageNum==1" :class="{active:activeIndex==6}" ref="text7"></span>
          <span class="item item8" v-show="pageNum==1" :class="{active:activeIndex==7}" ref="text8"></span>
          <!-- <span class="item item9" v-show="pageNum==2" :class="{active:activeIndex==8}" ref="text9"></span>
          <span class="item item10" v-show="pageNum==2" :class="{active:activeIndex==9}" ref="text10"></span>
          <span class="item item11" v-show="pageNum==2" :class="{active:activeIndex==10}" ref="text11"></span>
          <span class="item item12" v-show="pageNum==2" :class="{active:activeIndex==11}" ref="text12"></span> -->
          <div class="pause" @click="pauseItem" v-show="isPause"><img src="../../../../assets/images/commonImg/sing-pause.png"
              alt=""></div>
        </div>
        <div class="content-right">
          <span class="page5Play" @click="beginMusicAndEnd('play',0)"></span>
          <span class="page5Play" @click="beginMusicAndEnd('play',1)"></span>
          <span class="page5Play" @click="beginVideo"></span>
        </div>
        <div class="content-video" v-if="isShowVideo">
          <video-player class="video-player" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
          <div class="close" @click="isShowVideo=false">x</div>
        </div>
      </div>
      <!-- <div class="page5-left">
        <div @click="beginMusicAndEnd('play')" class="page5Play"></div>
      </div>-->
    </div>
  </div>
</template>
<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../../components/letSingMenu";
  import vuedraggable from "vuedraggable";
  import {
    videoPlayer
  } from "vue-video-player";

  export default {
    name: "",
    components: {
      VueAudio,
      vuedraggable,
      videoPlayer
    },
    data() {
      return {
        timer1: null,
        step1: 0,
        isSHow: "",
        curImg1: "./static/images/a/a_00000.png",
        value1: 50,
        audiosMusicUrlDefault: "./static/mp3/level1/level1-08.mp3",
        audios: {
          url: "./static/mp3/level1/level1-08.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [ //右侧菜单
          {
            routerUrl: 'L1Course8Day5Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sing-menu-sing.png')
          },
          {
            routerUrl: 'L1Course8Day5Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sing-menu-voca.png')
          },
          {
            routerUrl: 'L1Course8Day5Page3',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sing-menu-lookchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course8',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sing-menu-back.png')
          },
        ],
        playtime: {
          time: 147.4,
          randem: Math.random(1000),
           stopTime:1.8
        },
        router: "L1Course8Day5Page2",
        // musicTimeList: {
        //   play: {
        //     beginTime: 0,
        //     endTime: 31
        //   }
        // },
        flag: false,
        timerList: [],
        activeIndex: -1,
        songItem: [],
        pageNum:1,
        pageLines:8,
        songList: [{
            songTime: [{
                id: "songItem1",
                beginTime: 3.8
              },
              {
                id: "songItem2",
                beginTime: 5.7
              },
              {
                id: "songItem3",
                beginTime: 7.7
              },
              {
                id: "songItem4",
                beginTime: 9.7
              },
              {
                id: "songItem5",
                beginTime: 11.7
              },
              {
                id: "songItem6",
                beginTime: 13.5
              },
              {
                id: "songItem7",
                beginTime: 15.5
              },
              {
                id: "songItem8",
                beginTime: 17.4
              }
            ],
            audiosMusicUrl: "./static/mp3/level1/level1-08-song.mp3",
            beginTime: 0, //歌曲开始时间
            endTime: 23, //歌曲结束时间
            endLyric: 23 //歌词结束时间
          },{
            songTime: [{
                id: "songItem1",
                beginTime: 3.8
              },
              {
                id: "songItem2",
                beginTime: 5.7
              },
              {
                id: "songItem3",
                beginTime: 7.7
              },
              {
                id: "songItem4",
                beginTime: 9.7
              },
              {
                id: "songItem5",
                beginTime: 11.7
              },
              {
                id: "songItem6",
                beginTime: 13.5
              },
              {
                id: "songItem7",
                beginTime: 15.5
              },
              {
                id: "songItem8",
                beginTime: 17.4
              }
            ],
            audiosMusicUrl: "./static/mp3/level1/level1-08-instrumental.mp3",
            beginTime: 0, //歌曲开始时间
            endTime: 23, //歌曲结束时间
            endLyric: 23 //歌词结束时间
          }
        ],
        playerOptions: {
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "./static/mp4/level1-08.mp4" //你的视频地址（必填）
          }],
          poster: "", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          //controlBar: {
          //timeDivider: true,
          //durationDisplay: true,
          //remainingTimeDisplay: false,
          //fullscreenToggle: true  //全屏按钮
          //}
        },
        isShowVideo: false,
        isDisabled: false,
        isPause: false
      };
    },
    methods: {
      beginVideo() {
        this.isShowVideo = true;
        this.activeIndex = -1;
        this.isPause = false;
        this.$refs.audioss.pausePlay();
        this.clearTimer();
      },
      beginMusicAndEnd(item, index) {
        let that = this;
        if (that.isDisabled) {
          that.pageNum = 1;
          that.isPause = true;
          that.activeIndex = -1;
          that.clearTimer();
          let mSongList = this.songList[index];
          // console.log(mSongList);
          this.audios.url = this.songList[index].audiosMusicUrl;
          if (item == "play") {
            that.$refs.audioss.getplay();
            for (var song = 0; song < mSongList.songTime.length; song++) {
              that.timerList[song] = window.setTimeout(
                pos => {
                  that.activeIndex = pos;
                  if (pos==that.pageLines){
                    that.pageNum = that.pageNum+1;
                    // console.log(that.pageNum)
                  }
                },
                mSongList.songTime[song].beginTime * 1000,
                song
              );
            }
          }
          this.playtime.randem = Math.random(1000);
          this.playtime.time = this.songList[index].beginTime;
          let stop = mSongList.endTime * 1000;
          let stopLyric = mSongList.endLyric * 1000;
          that.timerList[mSongList.songTime.length] = window.setTimeout(() => {
            that.activeIndex = -1;
          }, stopLyric);
          that.timerList[mSongList.songTime.length + 1] = window.setTimeout(
            () => {
              that.isPause = false;
              that.$refs.audioss.pausePlay();
              that.clearTimer();
            },
            stop
          );
        } else {
          // console.log("wait title");
        }
      },
      pauseItem() {
        this.activeIndex = -1;
        this.isPause = false;
        this.$refs.audioss.pausePlay();
        this.clearTimer();
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      }
    },
    mounted() {
      let that = this;
      that.flag = true;
      that.timerList[0] = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(that.timerList[0]);
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        that.isDisabled = true;
        clearTimeout(that.timerList[1]);
      }, 1800);
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/letSing";
  @rem: 128rem;

  .div-bg {
    .page2-content {
      .content {
        // 超过8句请设置以下属性：
        justify-content:flex-start;
        .itemTitle {
          width: 660/@rem;
          height: 60/@rem;
          background: url("../../../../assets/images/level1/course8/day5-p1-sText.png") no-repeat;
          background-size: 1162/@rem 528/@rem;
          background-position: 0 0/@rem;
          // 单独设置
          left:0;
        }

        .item {
          width: 660/@rem;
          height: 60/@rem;
          min-height: 60/@rem;
          display: block;
          background: url("../../../../assets/images/level1/course8/day5-p1-sText.png") no-repeat;
          background-size: 1162/@rem 528/@rem;
          // 循环输出歌词样式
          .loop(@counter) when (@counter > 0) {
              .loop((@counter - 1));
              &.item@{counter} {
                  background-position-y:-(40+56*@counter)/@rem;
              }
          }
          .loop(12);

          &.active {
            background-position-x: -832/@rem;
          }

          img {
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
</style>
