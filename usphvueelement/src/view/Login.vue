<template>
  <div class="loginbody">
    <div class="login">
      <div class="mylogin" align="center">
        <h4>登录</h4>
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          label-width="0px"
        >
          <el-form-item
            label=""
            prop="account"
            style="margin-top:10px;"
          >
            <el-row>
              <el-col :span='2'>
                <span class="el-icon-s-custom"></span>
              </el-col>
              <el-col :span='22'>
                <el-input
                  class="myClass inpss"
                  placeholder='账号'
                  v-model="loginForm.account" >
                </el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
            label=""
            prop="passWord"
          >
            <el-row>
              <el-col :span='2'>
                <span class="el-icon-lock"></span>
              </el-col>
              <el-col :span='22'>
                <el-input
                  class="myClass inpss"
                  type="password"
                  placeholder='密码'
                  v-model="loginForm.passWord"
                ></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item style="margin-top:55px;">
            <el-button
              type="primary"
              round
              class="submitBtn"
              @click="submitForm"
            >登录
            </el-button>
          </el-form-item>
          <div>
            <router-link :to="{ path: '/forgetpwd'}" class="linkcolor">
              忘记密码?
            </router-link>
            |
            <router-link :to="{path: '/register'}">
              <a href="register.vue" target="_blank" align="right"  class="linkcolor" >注册新账号</a>
            </router-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script> 
 import {mapMutations} from "vuex";

  export default {
    name: "Login",
    data: function () {
      return {
        loginForm: {
          account: '',
          passWord: ''
        },
        loginRules: {
          account: [
            {required: true, message: " ", trigger: "blur"}
          ],
          passWord: [{required: true, message: " ", trigger: "blur"}]
        }
      }
    },
   
    methods: {
      ...mapMutations(['changeLogin']),
      submitForm() {
        let self = this;
        const userAccount = this.loginForm.account;
        const userPassword = this.loginForm.passWord;
        const userForm = new FormData();
        userForm.append('name', userAccount);
        userForm.append('parssword', userPassword); 
        // if(userAccount!==""&&userPassword!==""){
        //     self.$router.push({path: '/main', replace: true})
        // }
       if(true)
       {
         this.axios.post('http://175.24.249.65:5001/api/User/Login', userForm
        ).then((res) => {
          console.log(res);
          if (res.data.success == false) {
            self.$message({
              type: 'error',
              message: res.data.error//'密码错误，登陆失败！'
            })
          }
          //token
          // self.sessiontoken = res.headers['sessiontoken'];
          // self.PageToken = Math.random().toString(36).substr(2);
          // sessionStorage.setItem('PageToken', self.PageToken);
          // self.changeLogin({sessiontoken: self.sessiontoken});
          //登录成功
          if (res.data.success == true) {
            self.$router.push({path: '/main', replace: true})
            // self.axios.get("URL2"
            // ).then((res) => {
              // if (res.data == null) {
              //   self.$message({
              //     type: 'error',
              //     message: '查询失败！'
              //   })
              // } else {
              //   if (res.data.userType == 0) {
              //     self.$router.push({path: '/supermana', replace: true})
              //   } else if (res.data.userType == 1) {
              //     self.$router.push({path: '/manauser', replace: true})
              //   } else if (res.data.userType == 2) {
              //     self.$router.push({path: '/ordinauser', replace: true})
              //   }
              // }
            // }).catch((error) => {
            //   console.log(error)
            // })
          }
        })
       }
      },
    }
  }
 </script>

 <style lang="less" scoped>
 .loginbody {
    //overflow: scroll;
    overflow-y: hidden;
    overflow-x: hidden;  
  }

  .login { 
    width: 100vw;
    padding: 0;
    margin: 0;
    height: 100vh; 
    font-size: 16px;
    background-position: left top;
    background-color: #242645;
    color: rgb(255, 255, 255);
    font-family: "Source Sans Pro";
    position: relative;
    background-image: url('../assets/background/background.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .mylogin {
    width: 240px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    // box-shadow: -15px 15px 15px rgba(19, 18, 18, 0.788);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(21, 21, 22, 0.904) 0%,
      rgba(172, 166, 166, 0) 100%
    );
  }

  .inpss input {
    border: none;
    color: rgba(255, 255, 255, 0);
    background-color: #dcdfe600;
    font-size: 12px;
  }

  .submitBtn {
    background-color: transparent;
    color: #39f;
    width: 200px;
  }
 .linkcolor{
   color: aliceblue;
 }

 </style>

 <style>
.myClass input.el-input__inner {
    border-radius:10px;
    background-color: #fff0;
}
 </style>
 