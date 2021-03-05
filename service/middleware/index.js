const miSend = require('./mi-send');
const miLog = require('./mi-log');
const compress = require('koa-compress');
const bodyParser = require('koa-bodyparser');
const staticFiles = require('koa-static');
const path = require('path');
const proxy = require('koa-server-http-proxy');
// 指定 public目录为静态资源目录，用来存放 js css images 等
const compressOptions = {
  threshold: 2048
};
module.exports = (app,config) => {
  app.use(miLog())
  app.use(compress(compressOptions))
  
  console.log(config.redirect_url,'config.redirect_url')
  app.use(proxy('/v5', {
    target: config.redirect_url,
    pathRewrite: {
      '^/v5': ''
    },
    changeOrigin: true
  }))
  // 放置 接口转发之后
  app.use(bodyParser())
  app.use(staticFiles(path.resolve(__dirname, "../../dist")))
  app.use(miSend())
}
