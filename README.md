# 财务后台管理系统vue-finance-manager  

### 项目简介
项目地址  
https://gitlab.newlink.com/czb-test-finance/vue-finance-manager  

webhook地址  
https://service-8l6u6qv9-1251903509.bj.apigw.tencentcs.com/release/gitlab-test-finance-main?id=636eff85-b360-4b20-8c21-d5f2e7a6fd86  

云函数地址  
https://console.cloud.tencent.com/scf/list?rid=8&ns=default  

### Visual Studio Code配置  
#### 插件  
ESlint  

Prettier  

Vetur  

Auto Close Tag  

ESlint配置  
1.code->首选项->Edit in settings.json  

2.settings.json配置如下  
```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },    
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue"
    ],
}
```  

3.eslintrc.js新增rules  
```
'prettier/prettier': [
      // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则⽆提示
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 160,
      },
    ]
```  

安装cnpm  
```
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
```
4.执行cnpm run lint  

### 环境配置  
#### node  
安装  
https://nodejs.org/zh-cn/  

查看node版本  
```
node -v
````

#### vue-cli
安装  
```
npm uninstall -g @vue/cli
npm install -g @vue/cli@3.11.0
```
查看安装版本  
```
vue -V
```

### 项目依赖
vuex  
介绍  
https://vuex.vuejs.org/zh/  
![Image text](https://gitlab.newlink.com/czb-test-finance/vue-finance-manager/-/raw/master/images/vuex.png)  

axios  
介绍  
http://www.axios-js.com/zh-cn/docs/index.html  
安装  
```
vue add axios  
```  





