
<template>
  <div id="loginCom">
    <div class="loginBox">
        <div class="loginHeader">
            <div class="loginLogo"></div>
        </div>
        <div class="loginBody">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2"  class="loginForm">
              <el-form-item prop="admin">
                <el-input type="text" v-model="ruleForm2.admin" auto-complete="off" placeholder="请输入帐号"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"
                placeholder="请输入密码"
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" class="loginIn">登录</el-button>
              </el-form-item>
            </el-form>
        </div>
        <p class="loginFooter">
            {{"宁波久禅物联科技有限公司"}}
        </p>
    </div>
  </div>
</template>

<script>
 import axios from "axios"

 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
     var validateAdmin = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入帐号'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          admin:'',
          pass: '',
        },
        rules2: {
          admin: [
            { validator: validateAdmin, trigger: 'blur',required: true}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur',required: true }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.replace("/menu")
            axios.get("http://g.cn").then(res=>{
              console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #loginCom {
      width: 100%;
      height: 100%;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .loginBox {
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align: center;
    }
    .loginHeader {
        min-height:130px;
        display:flex;
        justify-content:center;
    }
    .loginLogo {
        width: 96px;
        height: 110px;
        border-radius:50%;
        background: #20a0ff;
    }
    .loginBody {
        display:flex;
        justify-content:center;
    }
    .loginForm {
         width: 251px;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .loginIn {
        width: 251px;
    }
    .loginFooter {
      color:#A9A9A9;
    }
</style>
