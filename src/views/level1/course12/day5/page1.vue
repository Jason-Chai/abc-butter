<template>
  <div class="div-bg">
    <img src="../../../../assets/images/commonImg/page4bg.png" class="bg" alt>
    <!-- <img src="../../../../assets/images/commonImg/anibg4.png" class="xiong" alt /> -->
    <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer" />
    <div class="audio">
      <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
        :titleCurr="4" :routerUrl="router" :menuList="menuList"></VueAudio>
    </div>
    <div class="page4-content">
      <div class="content">
        <div class="content-left">
          <div class="each-pic pic-sentence" ref="sentenceMain" @click="beginMusicAndEnd('sentenceMain', 0)">
            <img src="../../../../assets/images/level1/course12/day5-p1-juzi.png">
          </div>
        </div>
        <div class="content-right">
          <div class="item item1" ref="sentence1" @click="beginMusicAndEnd('sentence1', 1)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img1.png">
            </span>
            <span class="text" :style="{'display':showText1 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img1b.png">
            </span>
          </div>
          <div class="item item2" ref="sentence2" @click="beginMusicAndEnd('sentence2', 2)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img2.png">
            </span>
            <span class="text" :style="{'display':showText2 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img2b.png">
            </span>
          </div>
          <div class="item item3" ref="sentence3" @click="beginMusicAndEnd('sentence3', 3)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img3.png" />
            </span>
            <span class="text" :style="{'display':showText3 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img3b.png" />
            </span>
          </div>
          <div class="item item4" ref="sentence4" @click="beginMusicAndEnd('sentence4', 4)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img4.png" />
            </span>
            <span class="text" :style="{'display':showText4 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img4b.png" />
            </span>
          </div>
          <div class="item item5" ref="sentence5" @click="beginMusicAndEnd('sentence5', 5)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img5.png" />
            </span>
            <span class="text" :style="{'display':showText5 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img5b.png" />
            </span>
          </div>
          <div class="item item6" ref="sentence6" @click="beginMusicAndEnd('sentence6', 6)">
            <span class="pic">
              <img src="../../../../assets/images/level1/course12/day5-p1-img6.png" />
            </span>
            <span class="text" :style="{'display':showText6 ? 'block':'none'}">
              <img src="../../../../assets/images/level1/course12/day5-p1-img6b.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueAudio from "../../../../components/sentenceMenu";
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
          url: "./static/mp3/level1/level1-12.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [
          //右侧菜单
          {
            routerUrl: 'L1Course12Day5Page1',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sent-menu-sent.png')
          },
          {
            routerUrl: 'L1Course12Day5Page2',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sent-menu-listenchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course12',
            imgSrc: require('../../../../assets/images/commonImg/menu/theme-sent-menu-back.png')
          }
        ],
        playtime: {
          time: 58,
          randem: Math.random(1000),
           stopTime: 2
        },
        router: "L1Course12Day5Page2",
        musicTimeList: {
          sentenceMain: {
            beginTime: 294.1,
            endTime: 15
          },
          sentence1: {
            beginTime: 309.9,
            endTime: 2.4
          },
          sentence2: {
            beginTime: 313.6,
            endTime: 2.5
          },
          sentence3: {
            beginTime: 316.9,
            endTime: 3
          },
          sentence4: {
            beginTime: 322,
            endTime: 3
          },
          sentence5: {
            beginTime: 325.8,
            endTime: 3
          },
          sentence6: {
            beginTime: 330.1,
            endTime: 3.5
          }
        },
        flag: false,
        timerList: [],
        showText1: false,
        showText2: false,
        showText3: false,
        showText4: false,
        showText5: false,
        showText6: false,
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
      }, 2000);
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
  @import "../../../../assets/css/sentence";
  @rem: 128rem;

  .content-left {
    position: absolute;
    left: -22 / @rem !important;
    top: -12 / @rem  !important;

    .pic-sentence {
      // 句子的宽度，每个课单独定
      width: 740 / @rem;

      img {
        width: 100%;
        display: block;
      }
    }
  }
  .content-right{
      padding-right: 70/@rem !important;
  }
</style>
