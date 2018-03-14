<template>
    <div>


    <div class="fixed">
        <ul>
            <li></li>
            <li></li>
            <li><a href=""><img src="../../assets/img/top.png" alt=""></a></li>
        </ul>
    </div>

    <!--轮播-->
    <!--图片-->
    <div id="banner">
         <img src="../../assets/img/ff.jpg" class="show" alt="">
         <img src="../../assets/img/y.jpg" alt="">
         <img src="../../assets/img/banner7.jpg" alt="">
         <img src="../../assets/img/banner8.jpg" alt="">
    </div>
    <!--图片下方的标记-->
    <!--<div id="imgs_a">-->
    <!--<a href="" class="first"></a>-->
    <!--<a href=""></a>-->
    <!--<a href=""></a>-->
    <!--<a href=""></a>-->
    <!--</div>-->

    <div class="index_div ">
        <span><img src="../../assets/img/index_1.jpg" alt=""></span>
        <span><img src="../../assets/img/index_2.jpg" alt=""></span>
    </div>

    <div class="index_div1">
        <p class="index_p">
            <span >今日上新</span>&nbsp;
            <span >New product</span>
        </p>
    </div>
    <!--今日上新-->
    <div id="today" class="showflower">
        <ul>
            <li v-for="(tmp,index) in proList" :key="index">
                <p><a ><img :src="require('../../assets/'+tmp.src)" ></a></p>
                <p>{{tmp.name}}</p>
                <p>{{tmp.price}}</p>
            </li>
        </ul>
        <!--
      <ul>
          <li>
              <p><a href="shopping-details-004.html"><img src="img/004.jpg" alt=""></a></p>
              <p>植物花卉004</p>
              <p>¥5700</p>
          </li>
          <li>
              <p><a href="shopping-details-003.html"><img src="img/p.jpg" alt=""></a></p>
              <p>植物花卉003</p>
              <p>¥5400</p>
          </li>
          <li>
              <p><a href="shopping-details-002.html"><img src="img/w.jpg" alt=""></a></p>
              <p>植物花卉002</p>
              <p>¥5600</p>
          </li>
          <li>
              <p><a href="shopping-details-001.html"><img src="img/q.jpg" alt=""></a></p>
              <p>植物花卉001</p>
              <p>¥6000</p>
          </li>
      </ul>
      -->
    </div>

    <!--计时器,限时促销-->
    <div class="showflower1">
        <p class="index_p" >
            <span >限时促销</span>&nbsp;
            <span >sales promotion</span>
        </p>
    </div>
    <div class="clock">
        <span id="d4">21时</span>
        <span id="d3">1分钟</span>
        <span id="d2">59秒</span>
    </div>
    <div id="sale">
        <span><img style="width: 600px" src="../../assets/img/index_3.jpg" alt=""></span>
        <span><img style="width: 600px" src="../../assets/img/index_4.jpg" alt=""></span>
    </div>
    <div class="clock_1">
        <span id="d7">21时</span>
        <span id="d6">1分钟</span>
        <span id="d5">59秒</span>
    </div>


    <div class="showflower1">
        <p class="index_p">
            <span >装点家园</span>&nbsp;
            <span >decorate the homes</span>
        </p>
        <div id="decorate"></div>
        <!--装点家园-->
        <ul>
          <li v-for="tmp in proDecorate">
            <p><a ><img :src="require('../../assets/'+tmp.src)" alt=""></a></p>
            <p>{{tmp.name}}</p>
            <p>{{tmp.price}}</p>
          </li>
        </ul>
        <!--
                <ul>
                    <li>
                        <p><a href="shopping-details-008.html"><img src="img/o.jpg" alt=""></a></p>
                        <p>植物花卉008</p>
                        <p>¥5600</p>
                    </li>
                    <li>
                        <p><a href="shopping-details-007.html"><img src="img/l.jpg" alt=""></a></p>
                        <p>植物花卉007</p>
                        <p>¥5300</p>
                    </li>
                    <li>
                        <p><a href="shopping-details-006.html"><img src="img/h.jpg" alt=""></a></p>
                        <p>植物花卉006</p>
                        <p>¥5700</p>
                    </li>
                    <li>
                        <p><a href="shopping-details-005.html"><img src="img/z.jpg" alt=""></a></p>
                        <p>植物花卉005</p>
                        <p>¥6000</p>
                    </li>
                </ul>
        -->
    </div>


    <!--图片的自动轮播-->
    <div class="showbox">
        <p class="index_p" style="position: relative;left: 50px;">
            <span>推荐商品</span> &nbsp;
            <span>大家都在看</span>
        </p>
        <div  class="box" id="box">
            <ul>
                <a href="shopping-details-012.html"><img src="../../assets/img/product/product1.jpg" alt=""/></a>
                <a href="shopping-details-011.html"><img src="../../assets/img/product/product2.jpg" alt=""/></a>
                <a href="shopping-details-010.html"><img src="../../assets/img/product/product3.jpg" alt=""/></a>
                <a href="shopping-details-009.html"><img src="../../assets/img/product/product4.jpg" alt=""/></a>
                <a href="shopping-details-013.html"><img src="../../assets/img/product/product8.jpg" alt=""/></a>
                <a href="shopping-details-014.html"><img src="../../assets/img/product/product7.jpg" alt=""/></a>
                <a href="shopping-details-015.html"><img src="../../assets/img/product/product6.jpg" alt=""/></a>
                <a href="shopping-details-016.html"><img src="../../assets/img/product/product5.jpg" alt=""/></a>
                <a href="shopping-details-017.html"><img src="../../assets/img/product/product12.jpg" alt=""/></a>
                <a href="shopping-details-018.html"><img src="../../assets/img/product/product11.jpg" alt=""/></a>
                <a href="shopping-details-019.html"><img src="../../assets/img/product/product10.jpg" alt=""/></a>
                <a href="shopping-details-020.html"><img src="../../assets/img/product/product9.jpg" alt=""/></a>
                <a href="shopping-details-001.html"> <img src="../../assets/img/product/001.jpg" alt=""/></a>
                <a href="shopping-details-002.html"> <img src="../../assets/img/product/002.jpg" alt=""/></a>
                <a href="shopping-details-003.html"> <img src="../../assets/img/product/003.jpg" alt=""/></a>
                <a href="shopping-details-004.html"> <img src="../../assets/img/product/004.jpg" alt=""/></a>
                <a href="shopping-details-005.html"> <img src="../../assets/img/product/005.jpg" alt=""/></a>
                <a href="shopping-details-006.html"> <img src="../../assets/img/product/006.jpg" alt=""/></a>
                <a href="shopping-details-007.html"> <img src="../../assets/img/product/007.jpg" alt=""/></a>
                <a href="shopping-details-008.html"> <img src="../../assets/img/product/008.jpg" alt=""/></a>
            </ul>
        </div>
    </div>

    <div class="index_5_all">
        <div class="index_5">

            <div class="index_5_1">
                <img src="../../assets/img/index_5.jpg" alt="">
            </div>
            <div class="index_5_1">
                <p>天气干燥，花店老板推荐制氧绿植</p>
                <p>发布日期：2017-11-30</p>
                <p>秋天的拉萨，天气比较干燥，这个时候在家里养一些可以制造氧气和水分的植物</p>
                <p>大有好处。记者走访多个花店后发现，很多店老板都会同时提到一种制氧植物</p>
                <p>——红豆杉。红豆杉有“植物增氧机”之称...</p>
            </div>
            <br>
            <div class="index_5_1">
                <img src="../../assets/img/index_6.jpg" alt="">
            </div>
            <div class="index_5_1">
                <p>山中花店的活动中 稀有种子如何获得？</p>
                <p>发布日期：2017-11-30</p>
                <p>从一九四七年巴黎蒙田大街30号New Look的展出开始，Dior就成为高级女装的</p>
                <p>代名词, 继承了法国高级女装的传统，始终保持华丽的设计路线，做工精细，迎</p>
                <p>合上流社会成熟女性的审...</p>
            </div>
        </div>
        <div class="index_7">
            <img src="../../assets/img/index_7.jpg" alt="">
        </div>
    </div>
    <br>
    <div class="index_8_all">
        <ul>
            <li>
                <img src="../../assets/img/index_8.jpg" alt="">
                <p>满1000元全国包邮</p>
                <p>全场订单满1000元全国包邮</p>
            </li>
            <li>
                <img src="../../assets/img/index_9.jpg" alt="">
                <p>下单送精美礼品</p>
                <p>本店购买任意商品赠送精美礼品</p>
            </li>
            <li>
                <img src="../../assets/img/index_10.jpg" alt="">
                <p>贴心的售后服务</p>
                <p>7x24小时售后随时为您服务</p>
            </li>
            <li>
                <img src="../../assets/img/index_11.jpg" alt="">
                <p>店铺优惠劵</p>
                <p>每日整点可领取限量优惠劵</p>
            </li>
        </ul>
    </div>



    </div>
</template>

<script>
//  import '@/assets/js/banner1.js';
//  import '@/assets/js/auto_play.js';

    export default{

        data:function(){
            return {
                proList:[],
                proDecorate:[],
                box:null,
                num:0,
                autoTime:null,
                x:59,
                y:1,
                z:21,
                time:null,
                d2 : null,
                d3 : null,
                d4 : null,
                d5 : null,
                d6 : null,
                d7 : null,
                myTimer:null,
                showImg:null,
            }
        },
        mounted:function(){
            this.box = $("#box");
            this.loadPro();
            this.clock();
            this.loadDecorate();
            this.myTimer=setInterval(this.banner,3000);
        },

        methods:{
           loadPro:function(){
               this.$http.get("http://localhost/vue_flower/tpls/src/assets/php/index.php").then((result)=>{
//                   console.log(result.data);
                   this.proList = result.data;
               })
           },
            loadDecorate:function(){
                this.$http.get("http://localhost/vue_flower/tpls/src/assets/php/decorate.php").then((result)=>{
//                              console.log(result.data);
                  this.proDecorate = result.data;
                })
            },
           clock:function(){

                this.time=setTimeout(this.clock,1000);

            this.d2=document.getElementById("d2");
            this.d3=document.getElementById("d3");
            this.d4=document.getElementById("d4");
            this.d5=document.getElementById("d5");
            this.d6=document.getElementById("d6");
            this.d7=document.getElementById("d7");
            this.d4.innerHTML=this.z+"时";
            this.d2.innerHTML=this.x+"秒";
            this.d3.innerHTML=this.y+"分钟";
            this.d7.innerHTML=this.z+"时";
            this.d5.innerHTML=this.x+"秒";
            this.d6.innerHTML=this.y+"分钟";
            //临界值
            if (this.y==0 &&this.x==0){
              this.x=59;
              this.y=59;
              --this.z;
            }
            else if (this.x!=0){
              --this.x;
            }
            else if(this.x==0) {
              this.x=59;
              --this.y;
            }
          },
           banner:function(){
               this.showImg=document.querySelector("#banner .show")
               this.showImg.className="";
               if(this.showImg.nextElementSibling!=null){
                   this.showImg.nextElementSibling.className="show"
               }
               else{
                   this.showImg.parentNode.children[0].className="show"
               }
           },

        },
        destroyed:function(){
            clearInterval(this.time);
            clearInterval(this.autoTime);
            clearInterval(this.myTimer);
        },
    }
</script>

<style scoped>
    @import "../../assets/css/normalize.css";
    @import "../../assets/css/index.css";
    @import "../../assets/css/banner1.css";

</style>
