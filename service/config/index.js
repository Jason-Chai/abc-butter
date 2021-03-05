const production_env = require('./production.config');
const development_env = require('./development.config');
//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
    production: production_env,
    development: development_env
}[process.env.NODE_ENV || 'development']