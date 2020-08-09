const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://3.16.27.56:3020/'
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}