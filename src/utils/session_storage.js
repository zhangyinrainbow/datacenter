export const default_active = 'default_active'

//存
export function setData(key, value) {
  return sessionStorage.setItem(key, value)
}

//取
export function getData(key) {
  return sessionStorage.getItem(key)
}

//删
export function removeData(key) {
  return sessionStorage.removeItem(key)
}
