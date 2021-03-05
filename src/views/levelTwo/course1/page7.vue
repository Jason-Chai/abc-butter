<template>
  <div class="div-bg">
    <img
      src="../../../assets/images/commonImg/anibg7.png"
      class="xiong"
      alt
    />
    <div class="audio">
      <VueAudio ref="audioss" :audioCurrentTime="playtime" :theUrl="audios.url" :theControlList="audios.controlList"
          :titleCurr="7" :routerUrl="router" :menuList="menuList"></VueAudio>
    </div>
    <div class="page7-content">
      <div class="content">
        <div class="content-left">
          <vuedraggable  @end="end"  v-model="appleLetter" v-bind="option"  :move="move"  >
            <transition-group>
              <li v-if="!answer4" :key="'answer4'" :id="'answer4'" class="item"  ref="right4" @click="beginMusicAndEnd('right4', 4)"  >
                  <img src="../../../assets/images/level1/course10/day1-p3-img4.png"  alt="" />
              </li>
               <li v-if="!answer2" :key="'answer2'" :id="'answer2'" class="item" ref="right2" @click="beginMusicAndEnd('right2', 2)"  >
                <img src="../../../assets/images/level1/course10/day1-p3-img2.png"  alt=""  />
              </li>
            </transition-group>
          </vuedraggable>
        </div>
        <div class="content-center">
         <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter1" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer1'" :id="'answer1'">
                    <!-- 正确答案2  -->
                    <img v-if="answer1" src="../../../assets/images/level1/course10/day1-p3-img1.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter2" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer2'" :id="'answer2'">
                    <!-- 正确答案1  -->
                    <img v-if="answer2" src="../../../assets/images/level1/course10/day1-p3-img2.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter3" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer3'" :id="'answer3'">
                    <!-- 正确答案3  -->
                    <img v-if="answer3" src="../../../assets/images/level1/course10/day1-p3-img3.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
              <vuedraggable tag="li" class="curBaseTr" v-model="appleLetter4" v-bind="option1" :move="move">
                <transition-group>
                  <li class="move" :key="'answer4'" :id="'answer4'">
                    <!-- 正确答案4  -->
                    <img v-if="answer4" src="../../../assets/images/level1/course10/day1-p3-img4.png" alt>
                  </li>
                </transition-group>
              </vuedraggable>
        </div>
        <div class="content-right">
         <vuedraggable  @end="end"  v-model="appleLetter" v-bind="option"  :move="move"  >
            <transition-group>
              <li v-if="!answer3" :key="'answer3'" :id="'answer3'" class="item" ref="right3" @click="beginMusicAndEnd('right3', 3)"  >
                  <img src="../../../assets/images/level1/course10/day1-p3-img3.png"  alt="" />
              </li>
               <li v-if="!answer1" :key="'answer1'" :id="'answer1'" class="item" ref="right1" @click="beginMusicAndEnd('right1', 4)"  >
                <img src="../../../assets/images/level1/course10/day1-p3-img1.png"  alt=""  />
              </li>
            </transition-group>
          </vuedraggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueAudio from "../../../components/lookPictureMenu";
import vuedraggable from "vuedraggable";
export default {
  name: "",
  components: {
    VueAudio,vuedraggable
  },
  data() {
    return {
      // 烟花
      timer1: null,
      step1: 0,
      isSHow: "",
      // curImg1: "./static/images/a/a_00000.png",
      value1: 50,
      audios: {
        url: "./static/mp3/level1/level1-10.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
      menuList: [
        //右侧菜单
        {
          routerUrl: "course1Page1",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-picture-menu-lead.png")
        },
        {
          routerUrl: "course1Page2",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-picture-menu-sent.png")
        },{
          routerUrl: "course1Page3",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-picture-menu-lookchoose.png")
        },
        {
          routerUrl: "index",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-picture-menu-back.png")
        }
      ],
      playtime: {
        time: 22.7,
        randem: Math.random(1000)
      },
      router: "course1Page8",
      musicTimeList: {
        right1: {
          beginTime: 27.8,
          endTime: 2
        },
        right2: {
          beginTime: 31.6,
          endTime: 2
        },
        right3: {
          beginTime: 35.3,
          endTime: 2
        },
        right4: {
          beginTime: 38.6,
          endTime: 2
        },
        play: {
          beginTime: 1325,
          endTime: 25
        },
        right: {
          beginTime: 250.26,
          endTime: 1.8
        },
        wrong: {
          beginTime: 252.7,
          endTime: 2.5
        },
        over: {
          beginTime: 256.8,
          endTime: 4
        }
      },
      //拖拽
      appleLetter: [
        {
          flag: "true",
          name: "red"
        }
      ],
      //拖拽
      appleLetter1: [
        {
          flag: "true",
          name: "red"
        }
      ],
      //拖拽
      appleLetter2: [
        {
          flag: "true",
          name: "red"
        }
      ],
      //拖拽
      appleLetter3: [
        {
          flag: "true",
          name: "red"
        }
      ],
      //拖拽
      appleLetter4: [
        {
          flag: "true",
          name: "red"
        }
      ],
      option: {
        group: {
          name: "aaa",
          pull: "clone"
        },
        filter: ".move",
        scroll: false,
        sort: false
      },
      option1: {
        group: {
          name: "aaa",
          pull: "clone"
        },
        filter: ".move",
        scroll: false,
        sort: false,
        disabled: false
      },

      flag: false,
      timerList: [],
      tempTimer: [],
      tempTimer2: null,
      playlist: ["text1", "text2", "text3", "text4"],
      //拖拽
      answer1: false,
      answer2: false,
      answer3: false,
      answer4: false,
      answerCount: 4,
      currentAnswer: 0,
    };
  },
  methods: {
    move(evt, originalEvent) {
      // console.log(evt, originalEvent.oldIndex);
    },
    beginMusicAndEnd(item, breakFlag, ani) {
        let that = this;
        if (breakFlag) {
          that.flag2 = false;
        }
        that.clearTimer();
        this.playtime.randem = Math.random(1000);
        this.playtime.time = this.musicTimeList[item].beginTime;
        let stop = this.musicTimeList[item].endTime * 1000;
        that.timerList[4] = window.setTimeout(() => {
          that.$refs.audioss.pausePlay();
          that.clearTimer();
          that.cleartempTimer();
        }, stop);
        if (ani) {
          that.$refs[item].style.animation = "";
          let tempTimer = window.setTimeout(() => {
            that.$refs[item].style.animation = "fadeIn 1s 0s both";
            window.clearTimeout(tempTimer);
          }, 10);
        }
    },
    cleartempTimer() {
        for (let i = 0; i <= this.tempTimer.length; i++) {
          window.clearTimeout(this.tempTimer[i]);
        }
        this.tempTimer.splice(0, this.tempTimer.length);
      },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    },
    end(evt) {
      // console.log(evt, "end");
      var that = this;
      var TzTagName = evt.item.id;
      var TzTag = TzTagName.substring(0, 1);
      var oldIndex = evt.oldIndex;
      this.isOldIndex = oldIndex;

      var status = "";
      // console.log(TzTag, "TzTagTzTagTzTagTzTagTzTagTzTagTzTag");
      // console.log(TzTagName, "TzTagNameTzTagNameTzTagNameTzTagName");
      // console.log(
      //   evt.to.children[0].id,
      //   "evt.to.parentElement.classNameevt.to.parentElement.classNameevt.to.parentElement.className"
      // );
      if (evt.to.parentElement.className == "curBaseTr") {
        // console.log('evt.to.parentElement.className');
          if (evt.to.children[0].id == evt.item.id) {
            this.beginMusicAndEnd("right");
            this[evt.to.children[0].id] = true;
            this.currentAnswer++;
          } else {
            this.beginMusicAndEnd("wrong");
          }
          if (this.currentAnswer >= this.answerCount) {
            that.deerQuestion = false;
            that.deerStep = true;
            this.beginMusicAndEnd("over");
          }
        }
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
    }, 4600);
    // that.$refs.deer.addEventListener("animationend", function() {
    //   if (that.deerQuestion) {
    //     that.deerStep = false;
    //     let deerTime = window.setTimeout(() => {
    //       that.deerStep = true;
    //       window.clearTimeout(deerTime);
    //     }, 5000);
    //   }
    // });
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/index";
@import "../../../assets/css/lookPicture";
@rem: 128rem;
</style>
