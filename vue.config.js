// const path = require('path')
module.exports = {
  runtimeCompiler: true,
  publicPath: '.',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  // },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      },
    },
  },
  devServer: {
    port: 8088,
    open: true,
    proxy: {
      '^/user/get_wiki_users': {
        target: 'http://10.10.11.56:8001',
      },
      '^/czb': {
        target: 'http://10.10.11.56:8867',
      },
      '^/business': {
        target: 'http://10.10.11.56:8866',
      },
      '^/api/v4/': {
        target: 'https://gitlab.newlink.com',
      },
      '^/api/': {
        target: 'http://test-agiletc.czb365.com',
      },
      // '^/api/user/login': {
      //   target: 'http://test-agiletc.czb365.com',
      // },
    },
  },
}
