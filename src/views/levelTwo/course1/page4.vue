<template>
  <div class="a_page_2">
    <div class="bg-div">
      <!-- <div class="animate-bg" :class="{ 'animate-step': deerStep }" ref="deer"/> -->
      <div class="audio">
        <VueAudio
          ref="audioss"
          :audioCurrentTime="playtime"
          :theUrl="audios.url"
          :theControlList="audios.controlList"
          :titleCurr="2"
          :routerUrl="router"
          :menuList="menuList"
        ></VueAudio>
      </div>
      <div class="page4-content">
         <div class="content">
              <div class="contentBox">
                  <div class="item-pic"><img src="../../../assets/images/commonImg/hat.png"/></div>
                  <div class="item-list">
                      <div class="each-pic">
                          <span class="itemBg">h</span>
                      </div>
                      <div class="each-pic">
                          <span class="itemBg"></span>
                      </div>
                      <div class="each-pic">
                          <span class="itemBg">t</span>
                      </div>
                  </div>
              </div>
              <div class="content-match-base">
                    <div v-for="(item,index) in cardBaseList" :key="index" @click="beginMusicAndEnd(item,index,1)" class="each-pic">
                        <span class="itemBg">{{item.name}}</span>
                    </div>
              </div>
           </div>
        </div>
      </div>
  </div>
</template>
<script>
import VueAudio from "../../../components/submarineMenu";
import draggable from 'vuedraggable';

export default {
  name: "try",
  components: {
    VueAudio,draggable
  },
  data() {
    return {
      isRolling: false,
      value1: 50,
      audios: {
        url: "./static/mp3/level1/level1-01.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying",
      },
      rightAudios: "./static/mp3/music.mp3",
      errorAudios: "./static/mp3/click.mp3",
      playtime: {
        time: 0.5,
        randem: Math.random(1000),
        stopTime: 2.4,
      },
      router: "course1page6",
      menuList: [
        //右侧菜单
        {
          routerUrl: "L1Course1Day1Page1",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-vocan-menu-voca.png"),
        },
        {
          routerUrl: "L1Course1Day1Page2",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-vocan-menu-lookchoose.png"),
        },
        {
          routerUrl: "index?id=L1Course1",
          imgSrc: require("../../../assets/images/commonImg/menu/theme-vocan-menu-back.png"),
        },
      ],
      first_Item: "", //首次翻转Index
      oldRoll_Index: "",
      drag: false,
      cardBaseList:[{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img3.png'),
          beginTime: 7.8,
          endTime: 1.6,
          name: "a",
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img1.png'),
          beginTime:3,
          endTime:1.5,
          name: "b",
          groupId:1,
          isRolling:false,
        },{
          imgSrc:require('@//assets/images/level1/course1/day1-p1-img2.png'),
          beginTime: 5.3,
          endTime: 1.5,
          name: "c",
          groupId:2,
          isRolling:false,
        }
      ],
      cardList:[{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 5.3,
          endTime: 1.5,
          name:"Ant",
          groupId:2,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime:3,
          endTime:1.5,
          name:"Ant",
          groupId:1,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/beike-o.png'),
          beginTime: 7.8,
          endTime: 1.6,
          name:"bear",
          groupId:3,
          isRolling:false,
        }],
      flag: false,
      timerList: [],
      tempItem:{},
      deerStep: true,
      positionX:0,
      positionY:0
    };
  },
  watch:{

  },
  methods: {
    onStart() {
        // this.drag = true;
    },
    move({relatedContext, draggedContext}) {
        console.log('move');
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
            (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
    },
    onEnd(evt,originalEvent) {
		    console.log(evt, "end");
        var that = this;
        var TzTagName = evt.item.id;
	     	var TzIndex = TzTagName.substr(TzTagName.length-1, 1);
        var oldIndex = evt.oldIndex;
        that.isOldIndex = oldIndex;
        if (evt.to.parentElement.className == "list-group") {
       
        }
    },
    beginMusicAndEnd(item, index) {
      let that = this;
      that.cardList[index].isRolling = true;
      if (!!!that.first_Item) {
        console.log("first");
        that.first_Item = item;
      } else {
        console.log(that.first_Item);
        if (item.groupId != that.first_Item.groupId) {
          console.log("不匹配");
          // that.audios.url = that.errorAudios;
          setTimeout(() => {
            that.cardList[index].isRolling = false;
          }, 1500);
        } else {
          console.log("匹配");
          // that.audios.url = that.rightAudios;
          that.first_Item = "";
        }
      }

      this.playtime.randem = Math.random(1000);
      that.playtime.time = that.cardList[index].beginTime;
      that.playtime.stopTime = that.cardList[index].endTime;

      that.flag = true;
      that.$refs.audioss.startPlay();
    },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    },
  },
};
</script>
<style lang='less' scoped>
@import "../../../assets/css/index";
@import "../../../assets/css/submarine";
@rem: 128rem;

.a_page_2 {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  .content{
    width: 1280/@rem !important;
    margin-top: 134/@rem !important;
    font-size: 56/@rem;
     text-align: center;
    .content-match-base{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      justify-content: space-around;
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .content-match-base{
      margin-top: 50/@rem;
      color: #f5800c;
    }
  }
}
.itemBg{
    width: 131/@rem;
    height: 131/@rem;
    line-height: 131/@rem;
    display: block;
    background: url('../../../assets/images/commonImg/qian2.png') no-repeat;
    background-size: cover;
   
}
.contentBox{
    position: relative;
    font-size: 32/@rem;
    text-align: center;
    width: 1099/@rem;
    height: 389/@rem;
    background: url('../../../assets/images/commonImg/qian1.png');
    background-size: cover;
    margin: 0 auto;
    color: #fff;
    .item-pic{
        margin-top: 110/@rem;
        margin-left: 80/@rem;
        width: 190/@rem;
        height: 190/@rem;
     }
    .item-text{
      width: 100%;
      display: inline-block;
      text-align: center;
    }
    .item-img{
        position: absolute;
        bottom: 10/@rem;
        left: 10/@rem;
        width: 175/@rem;
        height: 110/@rem;
    }
    .item-img2{
        width: 175/@rem;
        height: 189/@rem;
    }
    .item-list{
      position: absolute;
      left: 290/@rem;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      width: 570/@rem;
      flex-direction: row;
      justify-content: space-around;
      color: #fff;
    }
}
</style>
