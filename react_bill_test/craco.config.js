const path = require('path')

// 添加别名
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}