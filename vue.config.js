const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   client: {
  //     webSocketURL: 'ws://localhost:8080/ws',
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   }
  // }
})
