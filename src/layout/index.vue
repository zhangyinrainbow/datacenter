<template>
  <el-container>
    <Sidebar />
    <!-- 右侧头部 -->
    <el-container>
      <el-header height="55px">
        <Header />
      </el-header>
      <!-- 右侧主体 -->
      <Main />
    </el-container>
  </el-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Sidebar, Header, Main } from './components'
// eslint-disable-next-line no-unused-vars
// import Sidebar from './components/sidebar'
export default {
  components: {
    Sidebar,
    Header,
    Main,
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0px 0px;
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.8);
}

.el-aside {
  background-color: #3a3f4c;
  height: 100%;
  /deep/ .el-menu {
    border-right: none;
    background: none !important;
  }
}
// /deep/ .el-menu-item {
//   background: none !important;
// }

.el-main {
  height: 100%;
  padding: 0px;
}
</style>
