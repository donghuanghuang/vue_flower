<template>
    <div class="header">
        <div class="header1">
            <span>在线时间08：30-21:30</span>
            <span>欢迎访问花语在线商城 !</span>
            <div id="header1_1" data-toggle="header_5">
            <span class="seachtxt"><input id="txtSearch" name="search_prompt" type="text" placeholder="请输入你要搜索的内容" style="width: 210px;height: 28px"/><img id="img1" src="../../assets/img/1.png" alt=""/>
            <ul class="hide"></ul>
            </span>
            <span v-if="isLogin" class="show_session">
             <a ><img title="用户中心" style="cursor: pointer" src="../../assets/img/order.png" alt=""/></a>
                 |&nbsp
                 <a href="cart.html"><img title="我的购物车" style="cursor: pointer
" src="../../assets/img/shop_car.png" alt=""/></a>&nbsp |&nbsp
                <a href="javascript:;">Welcome:<span data-name="uname">{{uname}}</span></a>
          <b>|</b>
              <a @click="logout" style="cursor: pointer">注销</a>
             </span>
            <span v-if="!isLogin" class="no_session">
                 <router-link to="/login">登录</router-link> &nbsp|
                 <router-link to="/register">注册</router-link>
            </span>


            </div>

        </div>
        <div id="header2_nav">
            <div class="header2">
                <img src="../../assets/img/header.png" alt=""/>
            </div>
            <div class="nav">
                <span><router-link to="/index">商品首页</router-link></span>
                <span><router-link to="/allthing">所有商品</router-link></span>
                <span><router-link to="/pay">支付方式</router-link></span>
                <span><router-link to="/about">关于花语</router-link></span>
                <span><router-link to="/index">线下门店</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return {
                isLogin : false,
                uname : ''
            }
        },
        mounted:function(){
            this.showUname();
        },
        methods:{
            showUname:function(){
                this.$http.get('http://localhost/vue_flower/tpls/src/assets/php/islogin.php', {withCredentials : true}).then((result)=>{
                    console.log(result.data);
                    if(result.data.ok == 1){
                        this.isLogin = true;
                        this.uname = result.data.uname;
                    }
                })
            },
            logout:function(){
                this.$http.get('http://localhost/vue_flower/tpls/src/assets/php/logout.php').then((result)=>{
                    console.log(result.data);
                    if(result.data.code>0){
                        alert('注销成功');
                        this.isLogin = false;
                        this.$router.push('/login');
                    }
                })
            },
        },
    }
</script>

<style scoped>
    @import "../../assets/css/normalize.css";
    @import "../../assets/css/header.css";
</style>
