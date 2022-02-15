import axios from 'axios'
import { Notification } from 'element-ui'

//创建axios实例
const service = axios.create({
  //请求超时时间
  timeout: 3000,
})

//添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // if (process.env.VUE_APP_ENV === 'pro') {
    //   if (config.url.indexOf('acapi') != -1) {
    //     config.url = 'http://10.10.11.56:8001/user/get_wiki_users'
    //   }
    //   else if (config.url.indexOf('czbuser') != -1) {
    //     config.url = 'http://10.10.11.56:8867' + config.url
    //   }
    // }
    return config
  },
  (err) => {
    console.log(err)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  (response) => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  () => Notification.error({ title: '错误', message: '对不起，服务器翘班了!', duration: 2000 })
)

export default service
