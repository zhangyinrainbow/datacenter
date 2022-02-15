<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <div id="el_title" v-if="!isCollapse">
      <span>数据工厂</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="default_active"
      router
      background-color="#3A3F4C"
      text-color="#fff"
      active-text-color="#409EFF"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <el-menu-item index="/index" id="el_home_menu">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/code">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span>查询验证码</span>
        </template>
        <el-menu-item index="/code/query_code">
          <i class="el-icon-caret-right"></i>
          <span slot="title">验证码查询</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/order_window">
        <template slot="title">
          <i class="el-icon-suitcase"></i>
          <span>完单弹窗</span>
        </template>
        <el-menu-item index="/order_window/prize">
          <i class="el-icon-caret-right"></i>
          <span slot="title">设置完单页抽奖弹窗</span>
        </el-menu-item>
        <el-menu-item index="/order_window/free">
          <i class="el-icon-caret-right"></i>
          <span slot="title">设置完单页免单弹窗</span>
        </el-menu-item>
        <el-menu-item index="/order_window/finish">
          <i class="el-icon-caret-right"></i>
          <span slot="title">设置消返油站</span>
        </el-menu-item>
        <el-menu-item index="/order_window/ticket">
          <i class="el-icon-caret-right"></i>
          <span slot="title">设置完单页券包弹窗</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/member_code">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span>会员宝扫码</span>
        </template>
        <el-menu-item index="/member_code/hunter">
          <i class="el-icon-caret-right"></i>
          <span slot="title">会员宝扫码回归</span>
        </el-menu-item>
      </el-submenu>

      <!-- <el-submenu index="/newlink_cloud">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span>能链云&高盛</span>
        </template>
        <el-menu-item index="/newlink_cloud/yun_code">
          <i class="el-icon-caret-right"></i>
          <span slot="title">查询验证码</span>
        </el-menu-item>
        <el-menu-item index="/newlink_cloud/auth_type">
          <i class="el-icon-caret-right"></i>
          <span slot="title">查询uid和来源</span>
        </el-menu-item>
      </el-submenu> -->

      <el-submenu index="/finance">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span>财务自动化</span>
        </template>
        <el-menu-item index="/finance/create_company_gassation">
          <i class="el-icon-caret-right"></i>
          <span slot="title">创建商户和油站</span>
        </el-menu-item>
        <el-menu-item index="/finance/finance_clean_main">
          <i class="el-icon-caret-right"></i>
          <span slot="title">清分主流程巡检</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/system">
        <template slot="title">
          <i class="el-icon-bank-card"></i>
          <span>系统工具</span>
        </template>
        <el-menu-item index="/system/build">
          <i class="el-icon-caret-right"></i>
          <span slot="title">表单构建</span>
        </el-menu-item>
        <el-menu-item index="/system/case">
          <i class="el-icon-caret-right"></i>
          <span slot="title">用例管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { setData, getData, default_active } from '@/utils/session_storage'
export default {
  data() {
    return {
      isCollapse: false,
      default_active: '/index',
    }
  },
  created() {
    this.$bus.$on('click', () => {
      this.isCollapse = !this.isCollapse
    })
    this.default_active = getData(default_active)
  },
  watch: {
    $route(to, from) {
      console.log(from.path) //从哪来
      console.log(to.path) //到哪去
      setData(default_active, to.path)
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu-item {
  padding-left: 30px !important;
}
#el_home_menu {
  padding-left: 20px !important;
  background: none !important;
}
#el_title {
  height: 54px;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  padding-bottom: 1px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.8);
  transform: translate3d(0, 0, 0);
}
.el-menu {
  border-right: none;
}
</style>
