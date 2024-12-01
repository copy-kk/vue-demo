const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint语法检查
  lintOnSave: false,
  devServer: {
    port: 8088 ,
    client: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
