<template>
    <div>

      <div id="login">
        <div id="login_message" class="animated fadeInRightBig">
          <form>
            <div>
              用户名&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text"  v-model="uname" style="width: 200px;height: 22px" name="uname" value="li" id="uname"  placeholder="请输入你的用户名">
            </div>
            <div>
              密码&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="password"  v-model="upwd" style="width: 200px;height: 22px" value="123456" name="upwd" id="upwd" placeholder="请输入你的密码">
            </div>

            <div class="login_checkbox"><input type="checkbox">记住我（请在私人计算机上使用此功能）</div>
            <div class="login_button">
              <input type="button" id="btn" @click="login()" value="登录" style="width: 50px;height:32px;background: black;border: none;color: white">&nbsp;&nbsp;&nbsp;
              <input type="button" value="注册" style="width: 50px;height:32px">
            </div>
            <div class="forget_password">
              忘记密码？点这里找回
            </div>
            <div class="read">
              <p>用户注册/登录说明：</p>
              <p>1、实际使用之前，需配置用户管理组件中的相关邮件。详情请参考教</p>
              <p> 程：《用户管理中相关邮件的配置》</p>
              <p>2、新用户注册后的审核方式有三种：自动核准、邮件激活、需要管理</p>
              <p>员批准（即人工审核），详情可参考教程《如何设置用户注册后的审核方式》</p>
            </div>
          </form>
        </div>
      </div>

    </div>
</template>

<script>

    export default{
      data:function(){
        return {
          uname:'',
          upwd:''
        }
      },
      methods:{
        login:function(){
          //正确的获取到用户名和密码
          //发送请求
//          console.log(this.uname)
          this.$http.get('http://localhost/vue_flower/tpls/src/assets/php/login.php?uname='+this.uname+"&upwd="+this.upwd,{withCredentials : true}).then((result)=>{
            console.log(result.data);
            if(result.data.code>0){
              alert('登录成功')
              this.$router.push('/index');
            }else{
              alert('用户名或密码不正确');
            }
          })
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/css/login.css";
</style>
