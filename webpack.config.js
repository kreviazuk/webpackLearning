// webpack 是node写出的来的
let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development', //模式,默认两种,productin,development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js', //打包后的文件名

        path: path.resolve(__dirname, 'build') //路径必须是一个绝对路径 
    },
    plugins: [
        // 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html', //模板
            filename: "index.html", //打包后的名字
        }),
        // 插件使用顺序没有先后有
        new MiniCssExtractPlugin({
            // 抽离出来的文件名字
            filename:"main.css"
        })
    ],
    module: { //模块
        rules: [ 
            // {
            // test:/\.css$/,
            // use: [{
            //     loader:'style-loader',
            //     options:{
            //         insertAt:'top'
            //     }
            // }, 'css-loader']
            
            // },
            {
            test:/\.css$/,
            use: [
                // 不把css放到header标签中,放到抽离出来的css中
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ]
            
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}