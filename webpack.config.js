const path = require('path')
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname,'src')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}