/**
 * 代码热替换：HotModuleReplacementPlugin
 * 生成html文件：HtmlWebpackPlugin
 * 报错但不退出webpack进程：NoErrorsPlugin
 * 代码压缩：UglifyJsPlugin
 * 自动打开浏览器： OpenBrowserPlugin
 * 设置环境变量： DefinePlugin
 */

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var ROOT_PATH = path.resolve(__dirname,'..');
var APP_PATH = path.resolve(ROOT_PATH,'src'); //配置这个主要是为了解决相对路径的问题
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var hotMiddlewareScript = require('webpack-hot-middleware');
//__dirname是node的全局变量,其指向当前项目文件目录
// module.exports={
//     devtool: 'source-map',//配置生成Source Maps 显示代码运行的具体情况
// }
module.exports={
    //entry的写法一般有string|Array|Object的这三种方式来分别在不同的场景中进行使用,里面的内容一般都是入口文件的路径
    entry:[
        path.resolve(APP_PATH,"main.js")
    ],
    output:{
        path: path.resolve(APP_PATH,"dist"),
        filename: '[hash:8].bundle.js',
        publicPath: '',//运行时的访问路径(最终打包输出的地址)
    },
    watch: true,
    module:{
        loaders:[
            {
                test:/\.js$/, //检测哪些文件需要此loader
                exclude:/node_modules/, //检测的时候过滤到一些不需要的文件
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },{
                test: /(\.css|\.scss)$/,
                loaders:['style','css?sourceMap','sass?sourceMap']
            },{
                test:/\.(jpe?g|png|gif|svg)$/i,
                loaders:[
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',//图片小于8k就转base64
                    'image-webpack' //图片压缩
                ]
            }

        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), //代码报错但不退出webpack进程
        new webpack.HotModuleReplacementPlugin(), //热更新替换插件
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), //or development
        }),  
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings: false,
        //     }
        // }), 
        //一般在production场景下才需要对代码进行压缩处理
        new HtmlWebpackPlugin({
            template:'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/',
        }),
        
    ],
    resolve:{

        extensions: ['.js','.jsx'], //指定可以被import的后缀名为..的文件
    },
    devtool: 'source-map', //使得调试更加的容易,显示代码运行的具体细节  
}
