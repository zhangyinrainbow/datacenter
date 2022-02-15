<template>
  <div>
    <div class="el_header_toggle" @click="toggleCollapse">
      <i :class="isCollpase ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <el-container direction="horizontal">
      <div class="el_header_toggle" @click="fullScreenCollapse">
        <i class="el-icon-rank"></i>
      </div>
      <el-button type="primary" @click="goBack" id="btn_logout">退出</el-button>
    </el-container>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import { deletecookie } from '@/utils/cookie'
import { logout } from '@/api/http'

export default {
  data() {
    return {
      isCollpase: true,
      isFullScreen: false,
    }
  },
  methods: {
    toggleCollapse() {
      this.$bus.$emit('click')
      this.isCollpase = !this.isCollpase
    },
    async goBack() {
      // let result = await logout()
      // console.log(result)
      this.$message.success('退出成功')
      deletecookie('username', '')
      this.$router.push('/login')
    },
    fullScreenCollapse() {
      screenfull.toggle()
      this.isFullScreen = !this.isFullScreen
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  #btn_logout {
    margin-right: 20px;
    margin-left: 10px;
  }

  .el_header_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    cursor: pointer;
    text-align: center;
    transition: background 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
    i {
      width: 20px;
      height: 20px;
    }
  }

  .el-container {
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
}
</style>
