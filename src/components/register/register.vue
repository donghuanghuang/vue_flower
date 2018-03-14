<template>
    <div>


      <section>
        <div id="register">
          <div id="register_message" >
            <form>
              <div class="common">
                用户名称 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" v-model="uname" name="uname" id="uname" placeholder="请输入用户名称">&nbsp;&nbsp;
                    <span  id="showname"  class="vali_info">
                        10个字符以内组合
                    </span>
              </div>
              <div class="common">
                用户密码 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="upwd" name="upwd" id="upwd" placeholder="请输入你的密码">&nbsp;&nbsp;
                    <span  class="vali_info">
                        密码6-12位数字加字母
                    </span>

              </div>

              <div class="common">
                手机号码 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" v-model="phone" name="phone" id="phone" placeholder="请输入手机号码">&nbsp;&nbsp;
                    <span  class="vali_info">
                        手机号码必须11位
                    </span>
              </div>
              <div class="common">
                用户邮箱 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" v-model="email" name="email" id="email" placeholder="请输入你的邮箱">&nbsp;&nbsp;
                    <span  class="vali_info">
                        邮箱要符合格式
                    </span>
              </div>

              <div class="register_button">
                <a href="login.html">
                  <input type="button" value="登录" style="width: 50px;height:32px;background: black;border: none;color: white">
                </a>
                <input type="button" value="注册" @click="clickRegister"  style="width: 50px;height:32px">
              </div>
            </form>

            <div class="read">
              <p>用户注册/登录说明：</p>
              <p>1、实际使用之前，需配置用户管理组件中的相关邮件。详情参考教程：</p>
              <p><a href="">《用户管理中相关邮件的配置》</a></p>
              <p>2、新用户注册后的审核方式有三种：自动核准、邮件激活、需要管理</p>
              <p>员批准（即人工审核），详情可参考教程<a href="">《如何设置用户注册后的审核方式》</a></p>
            </div>
          </div>
        </div>
      </section>


    </div>
</template>

<script>
      export default{

          data:function(){
              return {
                  uname:'',
                  upwd:'',
                  phone:'',
                  email:''
              }
          },
        methods:{
            clickRegister:function(){
                var uname = this.uname;
                var upwd = this.upwd;
                var phone = this.phone;
                var email = this.email;
                this.$http.get('http://localhost/vue_flower/tpls/src/assets/php/register.php?uname='+uname+'&upwd='+upwd+'&phone='+phone+'&email='+email).then((result)=>{
                    console.log(result.data);
                    if(result.data == 1){
                        alert("注册成功")
                        this.$router.push('/login')
                    }else{
                        alert('注册失败')
                    }
                })
            }
        },
      }

</script>

<style scoped>
  @import "../../assets/css/register.css";
</style>
