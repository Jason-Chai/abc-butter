/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-02-25 15:09:54
 * @LastEditTime: 2019-08-29 20:39:09
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    apps: [{
        // 生产环境
        name: "prod-implant1",
        // 项目启动入口文件
        script: "./service/app.js",
        // 项目环境变量
        env: {
            "NODE_ENV": "production",
            "PORT": 3020
        }
    }, {
        // 测试环境
        name: "development-c1",
        script: "./service/app.js",
        env: {
            "NODE_ENV": "development",
            "PORT": 3003
        }
    },{
        // 预发布环境
            name: "release-implant1",
            script: "./service/app.js",
            env: {
                "NODE_ENV": "production",
                "PORT": 3020
            }
        }
    ]
}