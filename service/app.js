const Koa = require('koa')
const app = new Koa()
const middleware = require('./middleware')
const router = require('./koa-router')
const config = require('./config')
middleware(app,config)
router(app)
console.log(config.port)
app.listen(config.port, () => {
  console.log('server is running')
})

