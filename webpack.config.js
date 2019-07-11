const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
//将CSS提取为独立的文件的插件
const extractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;
console.log('env:', env);

exports.default = {
    entry: {
        //打包入口文件
        main: './src/index.js',
    },
    //改变端口号
    devServer: {
        inline: true,
        port: 9090
    },
    mode: env, 
    plugins: [
        //项目入口文件
        new htmlPlugin({
            template: './src/index.tplt.html',
        }),
        new extractPlugin({
            filename: 'index.css',
        }),
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/build',
    },
    module: {
        rules: [ // rules为数组，保存每个加载器的配置
            {
                test:/.(jpg|png)$/,
                use:['url-loader']
            },
            {
                test: /.css$/, 
                use: [
                    extractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /.js$/,
                // 对于匹配的文件进行过滤，排除node_module目录下的文件
                exclude: path.resolve('node_modules'),
                loader: 'babel-loader',
                options: {
                    // 通常babel-loader的配置项可以写在根目录下的.babelrc文件中
                    presets: ['env'], // babel-preset-env
                    plugins: ['syntax-dynamic-import'],
                },
            },
        ],
    },
}