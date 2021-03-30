<template>
<div class="a_page_2">
    <div class="bg-div">
      <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer"/>
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
      <div class="page2-content">
        <div class="content">
              <draggable v-model="cardBaseList" group="site"  animation="300" @start="onStart" @end="onEnd">
                  <transition-group tag="div" class="content-match-base">
                      <div class="each-pic" v-for="(item,index) in cardBaseList" :key="index">
                          <img :src="item.imgSrc" alt>
                      </div>
                  </transition-group>
              </draggable> 
              <draggable v-model="cardBaseList" group="site"  animation="300" @start="onStart" @end="onEnd">
                  <transition-group tag="div" class="content-match-base">
                      <div class="each-pic" v-for="(item,index) in cardBaseList" :key="index">
                          <img :src="item.imgSrc" alt>
                      </div>
                  </transition-group>
              </draggable> 
              <draggable  v-model="cardList" group="site"  animation="300"  @start="onStart" @end="onEnd">
                  <transition-group tag="div" class="content-match-cardList">
                      <div class="each-pic" v-for="(item,index) in cardList" :key="index">
                          <!-- <img :src="item.imgSrc" alt> -->
                          {{item.name}}
                      </div>
                  </transition-group>
              </draggable> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import VueAudio from "../../../components/vocabularyMenu_n";

export default{
	name:'try',
  components: {
    VueAudio ,draggable
  },
	data(){
		return{
			isRolling:false,
      value1: 50,
      audios: {
        url: "./static/mp3/level1/level1-01.mp3",
        controlList: "noDownload noSpeed onlyOnePlaying"
      },
      rightAudios:'./static/mp3/music.mp3',
      errorAudios:'./static/mp3/click.mp3',
      playtime: {
        time: 0.5,
        randem: Math.random(1000),
        stopTime: 2.4
      },
      router: "index?id=L1Course1",
      option1: {
          filter: ".move",
          scroll: false,
          sortable: false
      },
      option2: {
          group: "aaa",
          filter: ".move",
          scroll: false,
          sortable: false
      },
      menuList:[//右侧菜单
          {
            routerUrl:'L1Course1Day1Page1',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-voca.png')
          },
          {
            routerUrl:'L1Course1Day1Page2',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-lookchoose.png')
          },
          {
            routerUrl:'index?id=L1Course1',
            imgSrc:require('../../../assets/images/commonImg/menu/theme-vocan-menu-back.png')
          }
      ],
      first_Item:'',//首次翻转Index
      oldRoll_Index:'',
      cardList:[{
          imgSrc:require('@/assets/images/level1/course1/p3_Bb.png'),
          beginTime: 5.3,
          endTime: 1.5,
          groupId:1,
          name:'A',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/p3_Aa.png'),
          beginTime:3,
          endTime:1.5,
          groupId:2,
           name:'b',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/p3_Cc.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:2,
           name:'B',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/level1/course1/p3_Dd.png'),
          beginTime: 10.6,
          endTime: 1.4,
          groupId:1,
          name:'a',
          isRolling:false,
      }],
      cardBaseList:[{
          imgSrc:require('@/assets/images/basket1.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:3,
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/basket2.png'),
          beginTime:3,
          endTime:1.5,
          groupId:1,
          isRolling:false,
        // },{
        //   imgSrc:require('@/assets/images/level1/course1/pagebb.png'),
        //   beginTime: 5.3,
        //   endTime: 1.5,
        //   groupId:2,
        //   isRolling:false,
        // },{
        //   imgSrc:require('@/assets/images/level1/course1/pagedd.png'),
        //   beginTime: 10.6,
        //   endTime: 1.4,
        //   groupId:4,
        //   isRolling:false,
        }
      ],
      flag: false,
      timerList: [],
      deerStep: true,
      drag: false
		}
	},
  //  watch: {
  //     cardList:{
  //       handler:function(newVal,oldVal){
  //         console.log(newVal)
  //         this.cardList = newVal;
  //       },
  //       deep: true
  //     },
  //     cardBaseList:{
  //       handler:function(newVal,oldVal){
  //         console.log(newVal)
  //         this.cardBaseList = newVal;
  //       },
  //       deep: true
  //     }
  // },
  methods:{
    onStart(){
        this.drag=true;
      },
      //拖拽结束事件
       onEnd() {
       this.drag=false;
    },
    beginMusicAndEnd(item,index){
      let that = this;
      that.cardList[index].isRolling = true;
      // if(!!!that.first_Item){
      //   console.log('first')
      //   that.first_Item = item;
      // }else{
      //     console.log(that.first_Item);
      //     if(item.groupId !=that.first_Item.groupId){
      //       console.log('不匹配')
      //       // that.audios.url = that.errorAudios;
      //       setTimeout(() => {
      //           that.cardList[index].isRolling = false;
      //       }, 1500);
      //     }else{
      //       console.log('匹配');
      //       // that.audios.url = that.rightAudios;
      //       that.first_Item = '';
      //     }
      // }
   
      this.playtime.randem = Math.random(1000);
      that.playtime.time = that.cardList[index].beginTime; 
      that.playtime.stopTime = that.cardList[index].endTime;
     
      that.flag = true;
      that.$refs.audioss.startPlay();
    },
    beginMusicAndEndB(item, index) {
      let that = this;
      that.cardBaseList[index].isRolling = true;
      // if(!!!that.first_Item){
      //   console.log('first')
      //   that.first_Item = item;
      // }else{
      //     console.log(that.first_Item);
      //     if(item.groupId !=that.first_Item.groupId){
      //       console.log('不匹配')
      //       // that.audios.url = that.errorAudios;
      //       setTimeout(() => {
      //           that.cardBaseList[index].isRolling = false;
      //       }, 1500);
      //     }else{
      //       console.log('匹配');
      //       // that.audios.url = that.rightAudios;
      //       that.first_Item = '';
      //     }
      // }
   
      this.playtime.randem = Math.random(1000);
      that.playtime.time = that.cardBaseList[index].beginTime; 
      that.playtime.stopTime = that.cardBaseList[index].endTime;
     
      that.flag = true;
      that.$refs.audioss.startPlay();
     
    },
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    },
    shuffle(arr) {
      // var i = arr.length, t, j;
     for (let i = 1; i < arr.length; i++) {
          const random = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[random]] = [arr[random], arr[i]];
      }
      console.log(arr);
      return arr;
    }
  },
  mounted(){
    // console.log('mounted');
    var that = this;
    that.$nextTick(() => {
       that.shuffle(that.cardList);
       that.shuffle(that.cardBaseList);
    })
    // that.cardList.sort(function () { 
    //   return Math.random() - 0.5; 
    // }); 
    // that.cardBaseList.sort(function () { 
    //   return Math.random() - 0.5; 
    // }); 

    // console.log(that.cardList);
    // console.log(that.cardBaseList);
  },
}
</script>
<style lang='less'>
@import "../../../assets/css/index";
@import "../../../assets/css/vocabulary_n";
@rem: 128rem;

.a_page_2 {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  .content{
    width: 1080/@rem !important;
    div{
      width: 100%;
    }
    .content-match-base,.content-match-cardList{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 350/@rem;
      justify-content: space-around;
      .each-pic{
          width: 375/@rem !important;
      }
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .content-match-cardList{
      margin-top: 150/@rem;
      .each-pic{
         width: 205/@rem !important;
      }
    }
  }
}
// .rollbox{
//     position: relative;
//     width: 254/@rem !important;
//     .rollbox_front,.rollbox_behind{
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         z-index: 99;
//         transform-style: preserve-3d; //表示所有子元素在3D空间中呈现
//         backface-visibility: hidden;  //元素背面向屏幕时是否可见
//         transition-duration: .5s;
//         // transform-style: 0 50%;
//         transition-timing-function:'ease-in';
//     }
//     .rollbox_front{
//         z-index: 100;
//     }
// }
//  .box_rolling{
//       .rollbox_front{
//         // transform: rotateY(180deg);
//         visibility:hidden;
//         z-index: 100;
//       }
//       .rollbox_behind{
//         // transform: rotateY(360deg);
//         visibility:visible;
//       }
//   }
</style>
