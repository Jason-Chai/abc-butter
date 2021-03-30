<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 19:49:14
 * @LastEditTime: 2019-09-22 15:03:42
 * @LastEditors: Please set LastEditors
 -->


<template>
  <div class="main a_page_2">
    <img :class="isSHow" style="z-index: 200;position:absolute;top:50%;left:-100%;transform:translate(-50%,-50%);width:100%;"
      :src="curImg1" />
    <div class="bg-div">
      <div class="audio">
        <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :routerUrl="router" :titleCurr="2" />
      </div>
      <div class="page2-content">
        <div class="contentMain">
          <div class="content">
              <div class="left"  @click="beginMusicAndEnd('red')" :class="redAnimate?'redAnimate':''" >
                <vuedraggable class="curRed" v-model="appleLetter1" :options="option" :move="move">
                  <transition-group>
                    <div :key="appleLetter1[0].name" :id="appleLetter1[0].name" class="move">
                      <!-- <img src="../../../assets/images/commonImg/p6-img3.png" /> -->
                      <div v-for="(item,index) in showAppleLetter1" :key="item.name"><img :class="'bg'+index" class="letterA-A"
                          :src="imageUrlA" /></div>

                    </div>
                  </transition-group>
                </vuedraggable>
              </div>
              <div class="center">
                <vuedraggable class="letterA " @end="end" v-model="appleLetter" :options="option" :move="move">
                  <transition-group>
                    <li :style="item.flag?'opacity:1;':'opacity:0;'" :class="(item.name =='A')?'letterA-A':(item.name =='aa')?'letterA-aa':'letterA-A'"
                      v-for="(item,index) in appleLetter" :key="'item.name'+index" @click="beginMusicAndEnd(item.name,index)"
                      :ref="'appleLetterList'+index" :id="item.name">
                      <!-- {{index}}{{(item.name =='A')?'A':(item.name =='a')?'a':''}} -->
                      <img :ref="item.name+'Animate'" :class="(item.name =='A')?'letterA-A':(item.name =='aa')?'letterA-aa':''"
                        :src="(item.name =='A')?imageUrlA:(item.name =='aa')?imageUrlAa:''" />
                    </li>
                  </transition-group>
                </vuedraggable>
              </div>
              <div class="right move" @click="beginMusicAndEnd('green')" :class="blueAnimate?'redAnimate':''" >
                <vuedraggable class="curGreen" v-model="appleLetter2" :options="option2" :move="move">
                  <transition-group>
                    <div :key="appleLetter2[0].name" :id="appleLetter2[0].name" class="move">
                      <!-- <img src="../../../assets/images/commonImg/p6-img4.png" /> -->
                      <div v-for="(item,index) in showAppleLetter2" :key="item.name"><img :class="'bg'+index" :key="item.name"
                          class="letterA-aa" :src="imageUrlAa" /></div>
                    </div>
                  </transition-group>
                </vuedraggable>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueAudio from "../../../components/lettersMenu";
  import vuedraggable from "vuedraggable";

  export default {
    name: "",
    components: {
      VueAudio,
      vuedraggable
    },
    data() {
      return {
        clickFlag: true,
        value1: 50,
        audios: {
          url: "./static/mp4/z2.mp3",
          controlList: "noDownload noSpeed onlyOnePlaying"
        },
        playtime: {
          time: 32,
          randem: Math.random(1000)
        },
        router: "course1page8",
        option: {
          group: {
            name: 'aaa',
            pull: 'clone'
          },
          filter: ".move",
          pull: 'clone',
          sort: false

        },
        option1: {
          group: {
            name: 'aaa'
          },
          filter: ".move",
          sort: false
        },
        option2: {
          group: {
            name: 'aaa'
          },
          filter: ".move",
          sort: false
        },
        imageUrlA: require("../../../assets/images/commonImg/p6-img2.png"),
        imageUrlAa: require("../../../assets/images/commonImg/p6-img1.png"),
        appleLetter1: [{
          flag: "true",
          name: "red"
        }],
        appleLetter2: [{
          flag: "true",
          name: "green"
        }],
        appleLetter: [{
            flag: "true",
            name: "A"
          },
          {
            flag: "true",
            name: "aa"
          },
          {
            flag: "true",
            name: "A"
          },
          {
            flag: "true",
            name: "aa"
          },
          {
            flag: "true",
            name: "A"
          },
          {
            flag: "true",
            name: "aa"
          },
          {
            flag: "true",
            name: "A"
          },
          {
            flag: "true",
            name: "aa"
          },
          {
            flag: "true",
            name: "A"
          }
        ],
        isAppFlag: null,
        isOldIndex: null,
        AAnimate: false,
        aaAnimate: false,
        redAnimate: false,
        blueAnimate: false,
        musicTimeList: {
          red: {
            beginTime: 38.174,
            endTime: 1.5
          },
          green: {
            beginTime: 43.56,
            endTime: 1.43
          },
          A: {
            beginTime: 45.765,
            endTime: 3
          },
          aa: {
            beginTime: 48.779,
            endTime: 2.838
          },
          err: {
            beginTime: 217.6,
            endTime: 1.42
          },
          right: {
            beginTime: 216,
            endTime: 1.8
          },
          over: {
            beginTime: 51.795,
            endTime: 15.964
          }
        },
        showAppleLetter1: [],
        initShowAppleLetter1: [],
        initShowAppleLetter2: [],
        showAppleLetter2: [],
        timerList: [],
        curImg1: './static/images/yh/yanhuab_00000.png',
        timer1: null,
        step1: 0,
        isSHow: '',
        count: 0
      };
    },
    watch: {
      count(val) {
        console.log(val);
      },
      // 如果拖拽完成
      appleLetter(val) {
        console.log(val);
      },
      appleLetter1(val) {

        console.log(val, 'appleLetter1');

        this.initShowAppleLetter1 = [];

        for (var i = 0; i < this.appleLetter1.length; i++) {
          if (this.appleLetter1[i].name === 'A') {
            this.initShowAppleLetter1.push({
              name: this.appleLetter1[i].name
            })
          }
        }
        if (this.initShowAppleLetter1.length != this.showAppleLetter1.length) {
          this.showAppleLetter1 = this.initShowAppleLetter1;
        }

        console.log(this.showAppleLetter1, 'showAppleLetter1')
      },
      appleLetter2(val) {
        console.log(val, 'appleLetter2');
        this.showAppleLetter2 = [];;
        this.showAppleLetter1 = [];

        this.initShowAppleLetter2 = [];
        for (var i = 0; i < this.appleLetter2.length; i++) {
          if (this.appleLetter2[i].name === 'aa') {
            this.initShowAppleLetter2.push({
              name: this.appleLetter2[i].name
            })
          }
        }
        if (this.initShowAppleLetter2.length != this.showAppleLetter2.length) {
          this.showAppleLetter2 = this.initShowAppleLetter2;
        }
        console.log(this.showAppleLetter2, 'appleLetter2');
      }
    },
    methods: {
      //预加载
      preload: function() {
        for (let item of this.curImgList1) {
          console.log(item)
          let image = new Image()
          image.src = item.url;
          image.onload = () => {
            this.count++
            console.log(this.count)
          }
        }
      },
      clickAnimate(item) {
        if (item == "red") {
          this.redAnimate = true;
        } else this.blueAnimate = true;
      },

      end(evt) {
        console.log(evt, "end");
        var that = this;
        var TzTag = evt.item.id;
        var oldIndex = evt.oldIndex;
        console.log(oldIndex, "oldIndex");
        this.isOldIndex = oldIndex;
        this.isAppFlag = 3;
        var status = ''
        if (TzTag == "A") {
          if (evt.to.parentElement.className == "curRed") {
            console.log("curRed");
            //成功A放入red
            status = 'right';
            this.appleLetter.splice(this.isOldIndex, 1, {
              flag: "false",
              name: "bbb"
            });
            // that.beginMusicAndEnd('right');
          } else {
            if (evt.to.parentElement.className == "curGreen") {
              console.log("errorRed");
              //index

              this.isAppFlag = 1;
              status = 'err'
              // that.beginMusicAndEnd('err');
            } else {
              console.log("其他");
            }
          }
        } else {
          if (TzTag == "aa") {
            if (evt.to.parentElement.className == "curGreen") {
              console.log("curGreen");
              status = 'right';
              this.appleLetter.splice(this.isOldIndex, 1, {
                flag: "false",
                name: "bbb"
              }, )
              //成功a放入green
              // that.beginMusicAndEnd('right');
            } else {
              if (evt.to.parentElement.className == "curRed") {
                //index
                this.isAppFlag = 2;
                status = 'err'
                // that.beginMusicAndEnd('err');

                console.log("errorGreen");
              } else {
                console.log("其他");
              }
            }
          }
        }
        console.log(this.isAppFlag, "this.isAppFlag");

        if (this.isAppFlag == 1) {
          //console.log(this.appleLetter, "11111");
          // this.appleLetter[this.oldIndex] = { flag: "true", name: "A" };
          //this.appleLetter.splice(this.isOldIndex, 1,{ flag: "false", name: "bbb" },)
          // console.log(this.appleLetter,'22222');
          // console.log(this.appleLetter,'LLLL')
        } else if (this.isAppFlag == 2) {
          //this.appleLetter.splice(this.isOldIndex, 1, { flag: "false", name: "ccc" });
        }

        if (status != '') {
          that.beginMusicAndEnd(status);
        }
        //console.log(this.appleLetter,'*********************');
        var appnum = 1;
        for (var i = 0; i < this.appleLetter.length; i++) {
          if (this.appleLetter[i].name == 'bbb') {
            appnum += 1;
          }
        }
        if (appnum == 10) {
          that.beginMusicAndEnd('over');
          this.isSHow = 'isSHow';
          this.timer1 = setInterval(this.yh, 60)
          that.clickFlag = false;
        }
      },
      // 烟花
      yh() {
        this.curImg1 = this.curImgList1[this.step1].url;
        this.step1++;

        if (this.step1 == 59) {
          window.clearInterval(this.timer1);
          this.isSHow = '';
        }
      },
      move(evt, originalEvent) {
        // console.log(evt, originalEvent.oldIndex);
      },
      beginMusicAndEnd(item, index) {
        let that = this;
          if(!that.clickFlag) return;
        that.clearTimer();
        // console.log("执行的定时器：", window.setTimeout);
        // console.log(
        //   "点击：",
        //   item,
        //   "开始时间：",
        //   this.musicTimeList[item].beginTime
        // );
        // console.log(
        //   "点击：",
        //   item,
        //   "开始时间：",
        //   this.musicTimeList[item].beginTime
        // );
        console.log('传入的数据：', index)
        if (index != undefined) {
          that.$refs['appleLetterList' + index][0].style.animation = 'flash 1s 0s both'
          that.timerList[5] = setTimeout(() => {
            that.$refs['appleLetterList' + index][0].style.animation = ''
          }, 1000);
        }
        this.playtime.randem = Math.random(1000);
        this.playtime.time = this.musicTimeList[item].beginTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        // this.$refs.audios.startPlay();
        that.flag = true;
        that.timerList[4] = window.setTimeout(() => {
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


      this.preload();

      let that = this;
      // that.timerList[0] = window.setTimeout(() => {
      //   that.$refs.audioss.startPlay();
      //   clearTimeout(that.timerList[0]);
      // }, 100);
      // that.timerList[1] = window.setTimeout(() => {
      //   that.redAnimate = true;
      //   clearTimeout(that.timerList[1]);
      // }, 8000);
      // that.timerList[4] = window.setTimeout(() => {
      //   // for (let i = 0; i < that.$refs.AAnimate.length; i++) {
      //     that.$refs.AAnimate[0].style.animation = 'bounceIn 1s both'
      //   // }
      //   clearTimeout(that.timerList[4]);
      // }, 5500);
      // that.timerList[5] = window.setTimeout(() => {
      //   // for (let i = 0; i < that.$refs.AAnimate.length; i++) {
      //     that.$refs.aaAnimate[0].style.animation = 'bounceIn 1s both'
      //   // }
      //   // that.$refs.aaAnimate.style.animation = 'bounceIn 1s both'
      //   clearTimeout(that.timerList[5]);
      // }, 10000);
      // that.timerList[2] = window.setTimeout(() => {
      //   that.blueAnimate = true;
      //   clearTimeout(that.timerList[2]);
      // }, 12500);
      // that.timerList[3] = window.setTimeout(() => {
      //   that.$refs.audioss.pausePlay();
      //   clearTimeout(that.timerList[3]);
      // }, 13835);
    }
  };
</script>

<style lang="less" scoped>
 @import "../../../assets/css/index";
 @import "../../../assets/css/lettersChen";
// @import '../../assets/css/AaCommon.scss';

  // .isSHow {
  //   display: block;
  //   left: 50% !important;
  // }
  

  .curRed {
    position: relative;
    width: 437/@rem;
    height: 477/@rem;
    li {
      display: none !important;
    }
  }

  .curGreen {
    position: relative;
    width: 293/@rem;
    height: 293/@rem;
    margin-top: 60/@rem;
    li {
      display: none !important;
    }
  }

  .opacityC {
    display: none !important;
  }

  .center {
      .scale(490, 490);
      .pos-a(230, 515, 3);
      .letterA {
        width: 100%;
        span {
          display: flex;
          margin-bottom: 0.1rem;
          flex-direction: row;
          justify-content: space;
          flex-wrap: wrap;
        }

        li {
          width: 137/@rem;
          height: 137/@rem;
          margin-left: 15/@rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 35/@rem;
          margin-bottom: 28/@rem;

          &:nth-child(3n + 1) {
            margin-left: 0;
          }
        }
      }
  }
  // //针对手机
  // @media screen and (max-width: 1000px) {
  //   .contentMain {
  //     width: 100%;
  //     height: 100%;
  //     display: flex;
  //   }
  // }

  // .bg-div {
  //   .content-bottom {
  //     position: absolute;
  //     bottom: 0.84rem;
  //     text-align: center;
  //     margin: 0 auto;
  //     display: block;
  //     width: 13.17rem;
  //     left: 50%;
  //     margin-left: -6.59rem;

  //     //针对手机
  //     @media screen and (max-width: 1000px) {
  //       width: 100%;
  //       left: 0;
  //       margin-left: 0;
  //       bottom: 0.3rem;
  //     }

  //     img {
  //       width: 13.17rem;
  //       height: 0.29rem;

  //       //针对手机
  //       @media screen and (max-width: 1000px) {
  //         width: 95%;
  //         margin: 0 auto;
  //         height: 0.15rem;
  //       }
  //     }
  //   }

  //   .content {
  //     justify-content: space-between;
  //     display: flex;
  //     align-items: center;
  //     width: 90%;
  //     margin: 1.2rem auto 0;

  //     //针对手机
  //     @media screen and (max-width: 1000px) {
  //       width: 100%;
  //       margin: 0 auto;
  //     }

  //     .content-main {
  //       width: 90%;
  //       margin: 0.9rem auto 0;
  //       display: flex;
  //       flex-flow: row;
  //       align-items: center;

  //       //针对手机
  //       @media screen and (max-width: 1000px) {
  //         width: 100%;
  //         margin: 0.3rem auto 0 !important;
  //       }

  //       .left img,
  //       .right img {
  //         width: 4.3rem;
  //         height: 3.45rem;

  //         @media screen and (max-width: 1000px) {
  //           width: 1.5rem;
  //           height: auto;
  //         }
  //       }

  //       .center {
  //         .letterA {
  //           width: 7rem;

  //           //针对手机
  //           @media screen and (max-width: 1000px) {
  //             width: 2.7rem;
  //           }

  //           span {
  //             display: flex;
  //             margin-bottom: 0.1rem;
  //             flex-direction: row;
  //             justify-content: space;
  //             flex-wrap: wrap;
  //           }

  //           li {
  //             width: 2.13rem;
  //             height: 2.13rem;
  //             background: #fff;
  //             box-shadow: 10px 10px 10px #f1f1f1;
  //             border: 1px #000;
  //             margin-left: 0.3rem;
  //             cursor: pointer;
  //             display: flex;
  //             align-items: center;
  //             justify-content: center;
  //             margin-bottom: 0.1rem;

  //             //针对手机
  //             @media screen and (max-width: 1000px) {
  //               width: 0.8rem;
  //               height: 0.8rem;
  //               margin-left: 0.1rem;
  //             }


  //             &:nth-child(3n + 1) {
  //               margin-left: 0;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
</style>
