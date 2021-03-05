const sendfile = require('koa-sendfile');
const path = require('path');
var view_path = path.resolve(__dirname, '../../dist');
module.exports = {
    home: async(ctx,next)=>{
        await sendfile(ctx, `${view_path}/index.html`);
    }
}