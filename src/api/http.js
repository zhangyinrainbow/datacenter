import request from '@/utils/request'

//登录
export function login(data) {
  return request.post('/user/get_wiki_users', data)
  // return request.post('/api/user/login', data)
}

//登出
export function logout() {
  return request.post('/api/user/quit')
}

//根据手机号获取验证码
export function get_code_by_phone(data) {
  return request.post('/czbuser/getCodeByPhone', data)
}

//完单抽奖弹窗
export function prizeDrawActivity(data) {
  return request.post('/czb_activity/prizeDrawActivity', data)
}

//完单免单弹窗
export function freeOrderStrategy(data) {
  return request.post('/czb_activity/freeOrderStrategy', data)
}

//完单消返油站
export function finishOrderStrategy(data) {
  return request.post('/czb_activity/finishOrderStrategy', data)
}

//完单券包弹窗
export function marketingStrategy(data) {
  return request.post('/czb_activity/marketingStrategy', data)
}

//会员宝扫码
export function hunterQR(data) {
  return request.post('/czbgas/hunterQR', data)
}

//能链云 查询验证码
export function phone_code(data) {
  return request.post('/business/phone_code', data)
}

//能链云 查询uid和来源
export function uid_auth_type(data) {
  return request.post('/business/uid_auth_type', data)
}

//获取gitlab项目信息
export function get_gitlab_info() {
  return request.get('/api/v4/projects/1366/repository/commits?private_token=glpat-BdEMV-kSHwizxQPeeDR1&per_page=50')
}

//创建商户和油站
export function company_create(data) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    params: data,
    url: data.env_id + 'user/company_create',
  }

  return request(options)
}

//清分流程巡检
export function finance_clean(data) {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    params: data,
    url: data.env_id + 'finance/finance_clean',
  }

  return request(options)
}
