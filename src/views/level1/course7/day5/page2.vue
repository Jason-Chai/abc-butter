<template>
  <div class="div-bg">
    <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer" />
    <div class="audio">
      <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
        :titleCurr="1" :routerUrl="router" :menuList="menuList"></VueAudio>
    </div>
    <div class="page4-content">
      <div class="content">
        <div class="content-left">
          <div class="each-pic pic-sentence" ref="sentenceMain" @click="beginMusicAndEnd('sentenceMain', 0)">
            <img src="../../../../assets/images/level1/course7/day5-p2-juzi.png">
          </div>
        </div>
        <div class="content-right">
          <div class="item item1" ref="sentence1" @click="beginMusicAndEnd('sentence1', 1)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course7/day5-p2-img1.png">
            </span>
            <span class="text" :style="{'display':showText1 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course7/day5-p2-img1b.png">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueAudio from "../../../../components/sentenceMenu_n";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        // 烟花
        timer1: null,
        step1: 0,
        isSHow: "",
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-07.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        playtime: {
          time: 145.3,
          randem: Math.random(1000),
           stopTime:1.8
        },
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course7Day5Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sentn-menu-sing.png')
          },
          {
            routerUrl: 'L1Course7Day5Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sentn-menu-sent.png')
          },
          {
            routerUrl: 'L1Course7Day5Page3',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sentn-menu-listenchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course7',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sentn-menu-back.png')
          }
        ],
        router: "L1Course7Day5Page3",
        musicTimeList: {
          sentenceMain: {
            beginTime: 147.5,
            endTime: 3.1
          },
          sentence1: {
            beginTime: 151.3,
            endTime: 2.8
          }
        },
        flag: false,
        timerList: [],
        showText1: false,
        // showText2: false,
        deerStep: true
      };
    },
    mounted() {
      let that = this;
      that.flag = true;
      let playTime = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(playTime);
      }, 10);
      let stopTime = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(stopTime);
      }, 1800);
      that.$refs.deer.addEventListener("animationend", function() {
        that.deerStep = false;
        let deerTime = window.setTimeout(() => {
          that.deerStep = true;
          window.clearTimeout(deerTime);
        }, 5000);
      });
    },
    methods: {
      move(evt, originalEvent) {
        // console.log(evt, originalEvent.oldIndex);
      },

      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();
        // console.log("传入的数据：", index);
        if (index != undefined) {
          that.$refs[item].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs[item].style.animation = "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer);
          }, 10);
        }

        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          setTimeout(() => {
            // 播完之后显示句子
            if (index != 0) {
              that["showText" + index] = true;
            }
          }, 500);
          that.clearTimer();
        }, stop);
      },
      clearTimer() {
        for (let i = 0; i <= this.timerList.length; i++) {
          window.clearTimeout(this.timerList[i]);
        }
        this.timerList.splice(0, this.timerList.length);
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/index";
  @import "../../../../assets/css/sentence_n";
  @rem: 128rem;

  .content {
      .content-left {
        position: absolute;
        left: -30 / @rem !important;
        top: 12 / @rem;

        .pic-sentence {
          // 句子的宽度，每个课单独定
          width: 563 / @rem;

          img {
            width: 100%;
            display: block;
          }
        }
      }
      .content-right{
        .item1{
          width: 405/@rem !important;
          height: 405/@rem !important;
        }
      }
  }
</style>
