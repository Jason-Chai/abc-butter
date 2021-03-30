<template>
  <div class="main">
    <!-- <img :class="isSHow" style="z-index: 9999999;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1"> -->
    <div class="bg-div">
      <!-- <div class="animate-bg" :class="deerQuestion?{'animate-step':deerStep}:{'animate-award':deerStep}" ref="deer"
        :style="deerQuestion?{backgroundImage:'url('+require('../../../assets/images/commonImg/deer.png')+')'}:{backgroundImage:'url('+require('../../../assets/images/commonImg/deer-good.png')+')'}"></div> -->
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="3" :routerUrl="router" :menuList="menuList"></VueAudio>
      </div>
      <div class="page2-content">
        <div class="content">
            <div class="content-left">
              <div class="each-pic pic-sentence" ref="sentenceMain" @click="beginMusicAndEnd('sentenceMain', 0)">
                <img src="../../../assets/images/commonImg/p5-img1.png">
              </div>
            </div>
            <div class="content-right">
              <div class="item item1" ref="sentence1" @click="beginMusicAndEnd('sentence1', 1)">
                <span class="pic">
                  <img src="../../../assets/images/commonImg/p5-img2.png">
                </span>
              </div>
              <div class="item item2" ref="sentence2" @click="beginMusicAndEnd('sentence2', 2)">
                <span class="pic">
                  <img src="../../../assets/images/commonImg/p5-img3.png">
                </span>
              </div> 
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueAudio from "../../../components/talkItOutMenu";
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
        curImg1: "./static/images/a/a_00000.png",
        value1: 50,
        audios: {
          url: "./static/mp3/level1/level1-03.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        menuList: [ //右侧菜单
          {
            routerUrl: 'L1Course3Day2Page1',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-lookchoose-menu-sent.png')
          },
          {
            routerUrl: 'L1Course3Day2Page2',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-lookchoose-menu-lookchoose.png')
          },
          {
            routerUrl: 'index?id=L1Course3',
            imgSrc: require('../../../assets/images/commonImg/menu/theme-lookchoose-menu-back.png')
          }
        ],
        playtime: {
          time: 59.3,
          randem: Math.random(1000),
           stopTime:5.6
        },
        router: "course1page7",
        musicTimeList: {
          question: [{
              lev: "btn1",
              id: 1,
              answer: "word2"
            },{
              lev: "btn2",
              id: 1,
              answer: "word1"
            },
          ],
          btn1: {
            beginTime: 67.4,
            endTime: 2.4
          },
          btn2: {
            beginTime: 71.2,
            endTime: 2.8
          },
          right: {
            beginTime: 199.9,
            endTime: 1.8
          },
          wrong: {
            beginTime: 202.2,
            endTime: 1.9
          },
          over: {
            beginTime: 206.5,
            endTime: 4
          }
        },
        flag: false,
        timerList: [],
        showTextLayer: ["showText1","showText2"],
        showText1: true, // 1  2 3 4 5  播放问题按钮 默认显示1
        showText2: false,
        // showText3: false,
        showQuestionItem: 0,
        questionList: [{}],
        currQusAns: "", // 当前问题的正确答案
        deerStep: true,
        deerQuestion: true
      };
    },
    methods: {
      beginMusicAndEnd(item) {
        let that = this;
        that.clearTimer();
        // console.log(item);
        this.playtime.randem = Math.random(1000);
         that.playtime.time = that.musicTimeList[item].beginTime; 
      that.playtime.stopTime = that.musicTimeList[item].endTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[3] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
        }, stop);
      },
      selectAnswer(item, index) {
        let that = this;
        let endtime = this.musicTimeList.right.endTime * 1000;
        let lastendtime = this.musicTimeList.over.endTime * 1000;
        var nextIndex = index + 1;
        if (item == this.musicTimeList["question"][index].answer) {
          if (nextIndex == this.musicTimeList["question"].length) {
            that.deerQuestion = false;
            that.deerStep = true;
            this.beginMusicAndEnd("over");
          } else {
            setTimeout(function() {
              that.showQuestionItem = nextIndex;
            }, endtime);
            this.beginMusicAndEnd("right");
          }
        } else {
          this.beginMusicAndEnd("wrong");
        }
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
        clearTimeout(that.timerList[1]);
      }, 5600);
      that.$refs.deer.addEventListener("animationend", function() {
        if (that.deerQuestion) {
          that.deerStep = false;
          let deerTime = window.setTimeout(() => {
            that.deerStep = true;
            window.clearTimeout(deerTime);
          }, 5000);
        }
      });
    }
  };
</script>


<style lang="less" scoped>
  @import "../../../assets/css/index";
  @import "../../../assets/css/talkItOut";
  @rem: 128rem;
  .content {
       position: relative;
      .content-left {
        position: absolute;
        left: 170 / @rem !important;
        top: 173 / @rem;

        .pic-sentence {
          // 句子的宽度，每个课单独定
          width: 283 / @rem;

          img {
            width: 100%;
            display: block;
          }
        }
      }
      .content-right{
        .item{
          .scale(619, 190);
        }
        .item1{
          .pos-a(548, 120, 3);
        }
        .item2{
          .pos-a(328, 566, 3);
        }
      }
  }

</style>
