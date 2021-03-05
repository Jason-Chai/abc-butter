const router = require('koa-router')()
const HomeController = require('./controller/home')
const ApiController = require('./controller/api')
module.exports = (app) => {
  router.get('/newApi/getSessNa', ApiController.getSessNa)
  router.get('/sjp2p',HomeController.home)
  router.get('/sjp2p/:path', HomeController.home)
  app.use(router.routes())
    .use(router.allowedMethods())
}
