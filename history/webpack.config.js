// webpack 是node写出的来的
let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin")
// 三个插件
// cleanWebpackPlugin
// copyWebpackPlugin
// bannerPlugin //内置
module.exports = {
    // devServer: { //开发服务器配置
    //     port: 3000,
    //     progress: true,
    //     contentBase: './dist', //默认指定目录
    //     compress: true
    // },
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
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            hash: true
        })
    ],
    module: { //模块
        rules: [ //规则 css-loader负责解析@import这种语法
            //style-loader负责将css插入到head的标签中
            //loader的特点 希望单一
            //loader的用法 字符串只用一个loader
            //多个loader需要用中括号
            //loader的顺序,默认是从右向左执行 从下到上执行
            // loader还可以写成对象方式
            {
            test:/\.css$/,
            use: [{
                loader:'style-loader',
                options:{
                    insertAt:'top'
                }
            }, 'css-loader']
            
            },
            {
                test:/\.less$/,
                use:[{
                    loader:'style-loader'
                },
                'css-loader', 
                'less-loader' //解析less为css
                ]
            }
        ]
    }
}