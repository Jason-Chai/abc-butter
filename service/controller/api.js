//const session = require('koa-session');
module.exports = {
    getSessNa:async(ctx,next)=>{
        ctx.send({sess:ctx.cookies.get('SMFWebFlag')})
        
    }
}