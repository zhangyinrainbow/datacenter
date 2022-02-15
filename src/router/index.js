import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/index.vue'
import Index from '../views/home/index.vue'
// import Login from '../views/login/index.vue'
import Login from '../views/login.vue'
import QeuryCode from '../views/home/code/index.vue'
import Prize from '../views/home/order_window/prize.vue'
import Free from '../views/home/order_window/free.vue'
import Finish from '../views/home/order_window/finish.vue'
import Ticket from '../views/home/order_window/ticket.vue'
import Hunter from '../views/home/member_code/hunter.vue'
import YunCode from '../views/home/newlink_cloud/yun_code.vue'
import AuthType from '../views/home/newlink_cloud/auth_type.vue'
import CreateCompanyGassation from '../views/home/finance/create_company_gassation.vue'
import FinanceCleanMain from '../views/home/finance/finance_clean_main.vue'
import Build from '../views/home/system/build/index.vue'
import Case from '../views/home/system/case/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/index',
      children: [
        { path: '/index', component: Index },
        { path: '/code/query_code', component: QeuryCode },
        { path: '/order_window/prize', component: Prize },
        { path: '/order_window/free', component: Free },
        { path: '/order_window/finish', component: Finish },
        { path: '/order_window/ticket', component: Ticket },
        { path: '/member_code/hunter', component: Hunter },
        { path: '/newlink_cloud/yun_code', component: YunCode },
        { path: '/newlink_cloud/auth_type', component: AuthType },
        { path: '/finance/create_company_gassation', component: CreateCompanyGassation },
        { path: '/finance/finance_clean_main', component: FinanceCleanMain },
        { path: '/system/build', component: Build },
        { path: '/system/case', component: Case },
      ],
    },
  ],
})

export default router
