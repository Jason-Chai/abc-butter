<template>
  <div class="inner draw">
    <div class="top-menu">
        <ul>
            <li @click="controlCanvas('fillReact')"><span></span></li>
            <li @click="controlCanvas('color')"></li>
            <li @click="controlCanvas('Brushs')"></li>
            <li @click="controlCanvas('currCanvas')"><span></span></li>
            <li @click="controlCanvas('clear')"></li>
        </ul>
    </div>
     <!--画笔颜色-->
    <div class="canvas-color"  :style="{'display': (showCanvasColor ?'block':'none')}">
        <ul>
             <li v-for="(item, index) in colors"  :key="index"
                @click="setColor(item)"
            ></li>
        </ul>
    </div>
      <!--画笔大小-->
    <div class="canvas-brush" :style="{'display': (showCanvasBrushs ?'block':'none')}" >
        <ul>
             <li  v-for="(pen, index) in brushs" :key="index"
                @click="setBrush(pen.lineWidth)"
            ></li>
        </ul>
    </div>
      <!--橡皮擦大小-->
    <div class="canvas-eraser" :style="{'display': (showCanvasEraser ?'block':'none')}" >
        <ul>
             <li  v-for="(pen, index) in brushs" :key="index"
                @click="setEraser(pen.lineWidth)"
            ></li>
        </ul>
    </div>

    <div class="wrap">
      <div class="canvasBox" ref="canvasBox">
        <canvas   id="canvas"  class="fl canvas"  :width="canvasWidths" :height="canvasHeights" ref="boardCanvas">
        <!-- <canvas   id="canvas"  class="fl canvas"  :width="canvasWidths" :height="canvasHeights" ref="boardCanvas"
           @mousedown="onTouchStart($event)"
            @mouseup="onTouchEnd($event)"
            @mousemove="onTouchMove($event)"
            @touchstart="onTouchStart($event)"
            @touchmove="onTouchMove($event)"
            @touchend="onTouchEnd($event)"> -->
        </canvas>
      </div>

    </div>
    <!--存放图片-->
    <div id="img-box" v-show="imgUrl.length">
      <div class="img-item" v-for="(src, index) in imgUrl" :key="index">
        <img :src="src" />
        <span class="fa fa-close" @click="removeImg(src)"></span>
      </div>
    </div>
  </div>
</template>

<script>
var startX, startY, //鼠标键按下的位置
    moveX, moveY, rectData;//鼠标移动到的位置
    var canvas;
export default {
  data() {
    return {
      colors: [  "#ff1f1f", "#e043ed",  "#ff9d00", "#ffe739", "#99ea44", "#2751ff", "#684de8", "#ffffff" ],
      brushs: [
        { className: "small fa fa-paint-brush", lineWidth: 3 },
        { className: "middle fa fa-paint-brush", lineWidth: 6 },
        { className: "big fa fa-paint-brush", lineWidth: 9  },
        { className: "big fa fa-paint-brush", lineWidth: 12 }
      ],
      context: {},
      imgUrl: [],
      canvas:'',
      canvasMoveUse: false,
      DATA: [],	//储存绘制数据
      config: {// 配置参数
        lineWidth: 1,
        eraserWidth: 10,//橡皮擦大小
        lineColor: "#ff1f1f",
        shadowBlur: 1,
        pens:0,
        eras:0
      },
      showCanvasColor: false,//canvas 色盘
      showCanvasBrushs: false, //canvas 笔触大小
      showCanvasEraser: false, //canvas 橡皮擦大小
    };
  },
   props: {
      canvasWidths: String,
      canvasHeights: String,
      isClearCanvas: Boolean
  },
  mounted() {
      this.initCanvas();
  },
  watch: {
    "isClearCanvas":{ //点击下一页清空画布
          handler(newVal) {
            this.controlCanvas('clear');
         }
     },
  },
  methods: {
    /**
     * 初始化画板
     */
    initCanvas(){
        // console.log('initCanvas');
        canvas = this.$refs.boardCanvas ;
        this.canvasWidth = canvas.offsetWidth ;
        this.canvasHeight = canvas.offsetHeight ;
        this.context = canvas.getContext('2d');
        this.context.beginPath();
        this.drawPen();//画笔功能
    },
    // 设置颜色
    setColor(color) {
      this.config.lineColor = color;
      this.showCanvasColor = false;
    },
    // 设置笔刷大小
    setBrush(type) {
      this.config.lineWidth = type;
      this.showCanvasBrushs = false;
    },
    // 设置橡皮擦大小
    setEraser(size) {
      this.config.eraserWidth = size * 2;
      //console.log(this.config.eraserWidth);
      this.showCanvasEraser = false;
    },
    //画笔功能
    drawPen: function () {
      var that = this;
      document.ontouchstart = function (ev) {
        let offsetLeft = ev.target.parentNode.offsetLeft;
        let offsetTop = ev.target.parentNode.offsetTop;
        if(ev.clientY < canvas.offsetTop){  return };
        if (that.isPc()) {
          var sx = ev.clientX - offsetLeft;
          var sy = ev.clientY - offsetTop;
        } else {
          var sx = ev.touches[0].clientX - offsetLeft;
          var sy = ev.touches[0].clientY - offsetTop;
        }

        that.config.PENS++;
        //画笔性能优化 每36ms取一个点
        var onOff = true;
        document.ontouchmove = function (ev) {
          let offsetLeft = ev.target.parentNode.offsetLeft;
          let offsetTop = ev.target.parentNode.offsetTop;

          if (!onOff) return;
          onOff = false;
          setTimeout(function () {
            onOff = true;
          }, 36);
          if (that.isPc()) {
            var ex = ev.clientX - offsetLeft;
            var ey = ev.clientY - offsetTop;
          } else {
            var ex = ev.touches[0].clientX - offsetLeft;
            var ey = ev.touches[0].clientY - offsetTop;
          }
          var n = that.DATA.length;

          that.DATA[n] = new Object();
          //为画笔绘制的对象定义属性'point-line'
          //将该对象存入绘制数据中
          that.DATA[n].attr = 'point-line';
          that.DATA[n].count = that.PENS;
          that.DATA[n].sx = sx;
          that.DATA[n].sy = sy;
          that.DATA[n].ex = ex;
          that.DATA[n].ey = ey;
          that.DATA[n].w = that.config.lineWidth;
          that.DATA[n].c = that.config.lineColor;
          //直接绘制
          that.context.beginPath();
          that.context.moveTo(sx, sy);
          that.context.lineTo(ex, ey);
          that.context.closePath();
          that.context.strokeStyle = that.config.lineColor;
          that.context.lineJoin = 'round';
          that.context.lineCap = 'round';
          that.context.lineWidth = that.config.lineWidth;
          that.context.stroke();
          sx = ex;
          sy = ey;
        };

        document.ontouchend = function () {
          document.ontouchmove = '';
        };
        // return false;
      };
    },
    //橡皮擦功能
    eraser: function () {
      var that = this;
      document.ontouchstart = function (ev) {
         that.config.eras++;
        document.ontouchmove = function (ev) {
          var ev = ev || event;
          let offsetLeft = ev.target.parentNode.offsetLeft;
          let offsetTop = ev.target.parentNode.offsetTop;
          var n = that.DATA.length;

          if (that.isPc()) {
            var ex = ev.clientX - offsetLeft;
            var ey = ev.clientY - offsetTop;
          } else {
            var ex = ev.touches[0].clientX - offsetLeft;
            var ey = ev.touches[0].clientY - offsetTop;
          }

          that.DATA[n] = new Object();

          that.DATA[n].attr = 'clear-rect';
          that.DATA[n].count = that.config.eras;
          that.DATA[n].x = ex - that.config.eraserWidth;
          that.DATA[n].y = ey - that.config.eraserWidth;

          that.DATA[n].w = that.config.eraserWidth;
          that.DATA[n].h = that.config.eraserWidth;
          // that.DATA[n].c = '#fff';
          that.context.fillStyle = "rgba(0,0,0,0)";
          //直接绘制
          that.context.beginPath();
          that.context.clearRect(ex - (that.config.eraserWidth/2), ey - (that.config.eraserWidth/2), that.config.eraserWidth, that.config.eraserWidth);
          that.context.closePath();
          that.context.fill();
        };
        document.ontouchend = function () {
          document.ontouchmove = '';
        };

        // return false;
      };
    },
    //矩形绘制
  drawRect: function () {
    var that = this;
    var sy,sx; //开始x,y
    var ex,ey;//结束x，y
    document.ontouchstart = function (ev) {
      var ev = ev || event;
      let offsetLeft = ev.target.parentNode.offsetLeft;
      let offsetTop = ev.target.parentNode.offsetTop;
      if(ev.clientY < canvas.offsetTop){  return ;}
      if (that.isPc()) {
        sx = ev.clientX - offsetLeft;
        sy = ev.clientY - offsetTop;
      } else {
        sx = ev.touches[0].clientX - offsetLeft;
        sy = ev.touches[0].clientY - offsetTop;
      }
      var n = that.DATA.length;
      document.ontouchmove = function (ev) {
         var ev = ev || event;
        let offsetLeft = ev.target.parentNode.offsetLeft;
        let offsetTop = ev.target.parentNode.offsetTop;

        if (that.isPc()) {
            ex = ev.clientX - offsetLeft;
            ey = ev.clientY - offsetTop;
        } else {
            ex = ev.touches[0].clientX - offsetLeft;
            ey = ev.touches[0].clientY - offsetTop;
        }
        var cx = ex - sx;
        var cy = ey - sy;

        that.DATA[n] = new Object();
        that.DATA[n].attr = 'rect';
        that.DATA[n].x = sx;
        that.DATA[n].y = sy;
        that.DATA[n].w = cx;
        that.DATA[n].h = cy;
        that.DATA[n].c = '#ffffff';

        that.render();
      };

      document.ontouchend = function () {

        document.ontouchmove = '';
      };
      // return false;
    };
  },
  //渲染图像
  render(){
      var that = this;
      this.context.clearRect(0,0,this.canvasWidths,this.canvasHeights);
       for (var i = 0; i < that.DATA.length; i++) {

      switch (that.DATA[i].attr) {

        //橡皮擦规则绘制
        case 'clear-rect':
          that.context.beginPath();
          that.context.lineJoin = 'round';
          that.context.lineCap = 'round';
          that.context.clearRect(that.DATA[i].x, that.DATA[i].y, that.DATA[i].w, that.DATA[i].h);
          that.context.closePath();
          that.context.fill();
          break;
       //矩形按下列规则绘制
        case 'rect':
          that.context.fillStyle = that.DATA[i].c;
          that.context.beginPath();
          that.context.fillRect(that.DATA[i].x, that.DATA[i].y, that.DATA[i].w, that.DATA[i].h);
          that.context.closePath();
          that.context.fill();
          break;
        //画笔、直线按下列规则绘制
        case 'point-line':
        // case 'line':
          that.context.beginPath();
          that.context.moveTo(that.DATA[i].sx, that.DATA[i].sy);
          that.context.lineTo(that.DATA[i].ex, that.DATA[i].ey);
          that.context.closePath();
          that.context.lineJoin = 'round';
          that.context.lineCap = 'round';
          that.context.strokeStyle = that.DATA[i].c;
          that.context.lineWidth = that.DATA[i].w;
          that.context.stroke();
          break;
      }
    }
  },
    // 操作
    controlCanvas(action) {
      switch (action) {
        case "color": //色盘
            this.showCanvasColor = !this.showCanvasColor;
            break;
        case "Brushs"://笔触
            this.drawPen();
            this.showCanvasBrushs = !this.showCanvasBrushs;
            break;
        case "fillReact"://矩形
            this.drawRect();
            break;
        case "currCanvas"://橡皮擦
            this.showCanvasEraser = !this.showCanvasEraser;
            this.eraser();
            break;
        case "clear"://清除画布
          //清空画板
          this.context.clearRect(0,0,this.context.canvas.width, this.context.canvas.height);
          this.DATA=[];
          rectData="";
          // 重新设置canvas画板节点对象，否则绘画会出问题,这里异步操作，否则绘画有误
          setTimeout(() => {
              this.initCanvas();
          },100);
          break;
      }
    },
    /**
     * 点击完成，生成画板图片，隐藏canvas画板区域，将生成的图片显示出来
     */
    clickFinish() {
      this.filePath = this.$refs.boardCanvas.toDataURL();
      this.$emit("onComplete", this.filePath); // 将生成的图片传给父组件
    },
    removeImg(src) {
      this.imgUrl = this.imgUrl.filter(item => item !== src);
    },
    isPc() {
      const userAgentInfo = navigator.userAgent;
      const Agents = [  "Android",  "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/index";
@rem: 128rem;

.fix-body {
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
ul{
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.inner{
    width: 1920/@rem;
    height: 1080/@rem;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    .top-menu{
        position: absolute;
        left: 1188/@rem;
        top: 43/@rem;
        width: 405 / @rem;
        // margin: 190/@rem auto 0;
        height: 95/@rem;
        background: url("../assets/images/tools.png");
        background-size: 405/@rem 95/@rem;
        background-position-y: -8/@rem;
        background-repeat: no-repeat;
        overflow: hidden;
        pointer-events: auto;
        ul li {
            float: left;
            display: inherit;
            width: 70/@rem;
            height: 95/@rem;
            margin-right: 12/@rem;
            border:1px solid black;
            pointer-events: auto;
            touch-action: none;
            &:last-child{
              margin-right: 0;
            }
        }
    }
    .canvas-color{
        position: absolute;
        top: 126/@rem;
        left: 1110/@rem;
        width: 402/@rem;
        height: 85/@rem;
        background: url("../assets/images/canvas-color.png") no-repeat;
        background-size: 100% 100%;
        pointer-events: auto;
        ul li {
            float: left;
            display: inherit;
            width: 30/@rem;
            height: 30/@rem;
            margin: 28/@rem 12/@rem 0 0;
            list-style: none;
            cursor: pointer;
            touch-action: none;
            &:first-child{
                margin-left: 37/@rem;
            }
        }
    }
    .canvas-brush,.canvas-eraser{
        position: absolute;
        top: 126/@rem;
        left: 1295/@rem;
        width: 195/@rem;
        height: 85/@rem;
        background: url("../assets/images/canvas-brushs.png") no-repeat;
        background-size: 100% 100%;
        pointer-events: auto;
        ul li {
            float: left;
            display: inherit;
            width: 20/@rem;
            height: 30/@rem;
            margin: 28/@rem 5/@rem 0 0;
            list-style: none;
            cursor: pointer;
            touch-action: none;
            &:first-child{
                margin-left: 37/@rem;
            }
            &:nth-child(3){
                margin-left: 8/@rem;
            }
            &:nth-child(4){
                margin-left: 10/@rem;
                width: 35/@rem;
                height: 35/@rem;
            }
        }
    }
    .canvas-eraser{
      left: 1376/@rem;
    }
    .wrap{
        width: 1500/@rem;
        height: 750/@rem;
        margin: 220/@rem auto 210/@rem;
        pointer-events: auto;
        .canvasBox,.canvas{
            width: 100%;
            height: 100%;
            touch-action: none;
        }
    }
}
</style>
