export function setcookie(name, value) {
  let Days = 30
  let exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';domain=.czb365.com;expires=' + exp.toGMTString()
}

export function deletecookie(name, value) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  document.cookie = name + '=' + escape(value) + ';domain=.czb365.com;expires=' + exp.toGMTString()
}
