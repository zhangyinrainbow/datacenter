<template>
  <div class="login_container">
    <div class="login_logo">
      <img src="https://cdn.czb365.com/inner/static/images/u3.png" alt="" />
    </div>
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="iconfont icon-3702mima" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="user_login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/http'
import { setcookie } from '@/utils/cookie'
import { setData, default_active } from '@/utils/session_storage'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginFormRules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' },
      },
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    user_login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        // const data = await this.$http.post('/acapi/appCenter/login', this.loginForm)
        const data = await login(this.loginForm)
        console.log(data)
        if (data.data.code == 200) {
          this.$message.success('登录成功')
          setData(default_active, '/index')
          //设置cookie
          setcookie('username', this.loginForm.username)
          // this.$cookie.set('username', 'shiyan')
          this.$router.push('/home')
        } else {
          this.$message.error(data.data.msg)
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #3a3f51;

  .login_logo {
    position: absolute;
    left: 30px;
    top: 30px;
    width: 130px;

    img {
      width: 130px;
    }
  }
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
</style>
