<template>
  <div class="a_page_2">
    <div class="bg-div">
      <img class="animate-bg" src="../../../assets/images/commonImg/anibg1.png" />
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="2" :routerUrl="router"  :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content">
          <div ref="word1" @click="beginMusicAndEnd('word1', 1)" class="each-pic pic1">
            <img src="../../../assets/images/level1/course9/day2-p2-img1.png" alt />
          </div>
          <div ref="word2" @click="beginMusicAndEnd('word2', 2)" class="each-pic pic2">
            <img src="../../../assets/images/level1/course9/day2-p2-img2.png" alt />
          </div>
          <div ref="word3" @click="beginMusicAndEnd('word3', 3)" class="each-pic pic3">
            <img src="../../../assets/images/level1/course9/day2-p2-img3.png" alt />
          </div>
          <div ref="word4" @click="beginMusicAndEnd('word4', 4)" class="each-pic pic4">
            <img src="../../../assets/images/level1/course9/day2-p2-img4.png" alt />
          </div>
          <div ref="word5" @click="beginMusicAndEnd('word5', 5)" class="each-pic pic5">
            <img src="../../../assets/images/level1/course9/day2-p2-img5.png" alt />
          </div>
          <div ref="word6" @click="beginMusicAndEnd('word6', 6)" class="each-pic pic6">
            <img src="../../../assets/images/level1/course9/day2-p2-img6.png" alt />
          </div>
          <div ref="word7" @click="beginMusicAndEnd('word7', 7)" class="each-pic pic7">
            <img src="../../../assets/images/level1/course9/day2-p2-img7.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueAudio from "./VueAudio";
  import VueAudio from "../../../components/vocabularyMenu";
  export default {
    name: "",
    components: {
      VueAudio
    },
    data() {
      return {
        value1: 50,
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
          time: 58,
          randem: Math.random(1000)
        },
        router: "course1day2Page3",
        antMoreShow: false,
        alligatorMoreShow: false,
        appleMoreShow: false,
        axMoreShow: false,
        musicTimeList: {
          word1: {
            beginTime: 62,
            endTime: 2
          },
          word2: {
            beginTime: 65.4,
            endTime: 2
          },
          word3: {
            beginTime: 68.5,
            endTime: 2
          },
          word4: {
            beginTime: 72.3,
            endTime: 2
          },
          word5: {
            beginTime: 75.8,
            endTime: 2
          },
          word6: {
            beginTime: 79.3,
            endTime: 2
          },
          word7: {
            beginTime: 82.7,
            endTime: 2
          }
        },
        flag: false,
        timerList: []
      };
    },
    methods: {
      beginMusicAndEnd(item, index) {
        let that = this;
        that.clearTimer();

        //console.log("传入的数据：", index);
        that[item + "MoreShow"] = true;
        if (index != undefined) {
          that.$refs["word" + index].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs["word" + index].style.animation = "fadeIn 1s 0s both";
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
      }
    },
    mounted() {
      let that = this;
      that.flag = true;
      that.timerList[0] = window.setTimeout(() => {
        that.$refs.audioss.startPlay();
        clearTimeout(that.timerList[0]);
        // that.clearTimer()
      }, 100);
      that.timerList[1] = window.setTimeout(() => {
        that.$refs.audioss.pausePlay();
        clearTimeout(that.timerList[1]);
        // that.clearTimer()
      }, 2000);
    }
  };
</script>

<style lang="less" scoped>
  @import "../../../assets/css/index";
  @rem: 128rem;

  .a_page_2 {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .bg-div {
      width: 100%;
      height: 100%;
      background: url("../../../assets/images/commonImg/page2bg.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .animate-bg {
      .scale(475, 337);
      .pos-a(640, 0, 3);
      opacity: 0;
      animation: fadeIn 1s both;
    }
  }

  .page2-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: justify;
    width: 1450 / @rem;
    margin: 200 / @rem auto 0;
    animation: zoomIn 1s both;

    .each-pic {
      width: 348 / @rem;
      height: 336 / @rem;
      margin-right: 18/@rem;
      margin-bottom: 20/@rem;

      img {
        display: inline-block;
      }
    }

    .each-pic:nth-child(4n) {
      margin-right: 0/@rem;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .ivu-slider-wrap {
    margin: 0.1rem 0 0 !important;
  }

  .audio {
    width: 100%;
    height: 0.31rem;
    margin-bottom: 0.1rem;
    /* animation: fadeIn 1s 5.5s both; */
    /* opacity: 0; */
  }
</style>
