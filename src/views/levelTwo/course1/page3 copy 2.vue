<template>
<div class="a_page_2">
    <div class="bg-div">
      <!-- <div class="animate-bg" :class="{'animate-step':deerStep}" ref="deer"/> -->
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
              <div class="content-match-base">
                   <div class="list-group" id="groupId1">
                      <img  src="../../../assets/images/commonImg/h1.png" class="bgImg"/>
                      <draggable :group='{name:"group1",put:true}' class="dragList" :list="arr1" :sort="true">
                            <span class="each-pic item" v-for="item in arr1" :key="item.id">{{item.name}}</span>
                      </draggable>
                  </div>
                   <div class="list-group" id="groupId2">
                      <img  src="../../../assets/images/commonImg/h2.png" class="bgImg"/>
                       <draggable :group='{name:"group2",put:true}'  class="dragList" :list="arr2" >
                            <span class="each-pic item" v-for="item in arr2" :key="item.id">{{item.name}}</span>
                      </draggable>
                  </div>
                  <div class="list-group" id="groupId3">
                      <img  src="../../../assets/images/commonImg/h3.png" class="bgImg"/>
                       <draggable :group='{name:"group3",put:true}'  class="dragList" :list="arr3" >
                            <span class="each-pic item" v-for="item in arr3" :key="item.id">{{item.name}}</span>
                      </draggable>
                  </div>
               </div>
              <div class="content-match-cardList" >
                <draggable v-for="item in arr" :key="item.id" :list="arr" class="each-pic"  
                    :option="{group:'group'+item.groupId}" :move="move" @end="onEnd">
                  <transition-group>
                  <div class="move" :key="'answer'+item.id" :id="'answer'+item.id">
                      <!-- {{item.name}} -->
                      <img :src="item.imgSrc"/>
                  </div>
                  </transition-group>
                </draggable>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import VueAudio from "../../../components/starTripMenu";

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
      router: "course1page4",
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
      arr1:[],
      arr2:[],
      arr3:[],
      arr:[{
          imgSrc:require('@/assets/images/commonImg/h4.png'),
          beginTime: 5.3,
          endTime: 1.5,
          groupId:1,
          name:'A',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/h5.png'),
          beginTime:3,
          endTime:1.5,
          groupId:2,
           name:'b',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/h5.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:2,
           name:'B',
          isRolling:false,
        },{
          imgSrc:require('@/assets/images/commonImg/h4.png'),
          beginTime: 10.6,
          endTime: 1.4,
          groupId:1,
          name:'a',
          isRolling:false,
      },{
          imgSrc:require('@/assets/images/commonImg/h6.png'),
          beginTime: 10.6,
          endTime: 1.4,
          groupId:3,
          name:'C',
          isRolling:false,
      },{
          imgSrc:require('@/assets/images/commonImg/h6.png'),
          beginTime: 10.6,
          endTime: 1.4,
          groupId:3,
          name:'c',
          isRolling:false,
      }],
      cardBaseList:[{
          id:1,
          imgSrc:require('@/assets/images/commonImg/h1.png'),
          beginTime: 7.8,
          endTime: 1.6,
          groupId:1,
          isRolling:false,
        },{
          id:2,
          imgSrc:require('@/assets/images/commonImg/h2.png'),
          beginTime:3,
          endTime:1.5,
          groupId:2,
          isRolling:false,
        },{
          id:3,
          imgSrc:require('@/assets/images/commonImg/h3.png'),
          beginTime: 5.3,
          endTime: 1.5,
          groupId:3,
          isRolling:false,
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
      console.log('start')
        this.drag=true;
    },
    move({relatedContext, draggedContext}) {
        console.log('move');
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
            (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
    },
      //拖拽结束事件
    onEnd(evt) {
        var that = this;
        var TzTagName = evt.item.id;
        var TzTag = TzTagName.substring(0, 1);
        var oldIndex = evt.oldIndex;
        this.isOldIndex = oldIndex;
        if (evt.to.parentElement.className == "curBaseTr") {
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
    clearTimer() {
      for (let i = 0; i <= this.timerList.length; i++) {
        window.clearTimeout(this.timerList[i]);
      }
      this.timerList.splice(0, this.timerList.length);
    }
  },
  mounted(){
    // console.log('mounted');
    var that = this;
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
@import "../../../assets/css/starTrip";
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
      height: 216/@rem;
      color: #fff;
      justify-content: space-around;
      .list-group{
          width: 216/@rem !important;
          position: relative;
          .dragList{
            position: absolute;
            display: inline-block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
      }
      img{
        display: inline-block;
        width: 100%;
      }
      .content-match-base{
          position: relative;
          .bgImg{
            position: absolute;
            display: inline-block;
            top: 0;
            left: 0;
            border: 1px solid red;
          }
      }
    }
    
    .content-match-cardList{
      margin-top: 110/@rem;
      .each-pic{
        display: inline-block;
         width: 150/@rem !important;
         height: 145/@rem;
      }
    }
  }
}
</style>

