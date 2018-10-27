const path = require('path');
const glob = require("glob");
const webpack = require('webpack');
const ClearWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const srcDir = path.resolve(__dirname, './static');
const distDir = path.resolve(__dirname, './dist');

const plugins = [new ClearWebpackPlugin(['dist'])];
//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    let files = glob.sync(srcDir+'/**/*.html'),
        entry = {},
        entryFileName,
        outputHtmlName;
    for(let i = 0; i < files.length; i++){
        let matchs = /static\/(\S*).html/.exec(files[i])
        entryFileName = outputHtmlName = '/' + matchs[1]; //得到page/index这样的文件名
        if(/^_\w*/.test(entryFileName) || /\/_\w*/.test(entryFileName))
        {
            continue;
        }
        console.log(srcDir + outputHtmlName + '.html')
        //生成html配置
        plugins.push(new HtmlWebpackPlugin({
            // 每个html的模版，这里多个页面使用同一个模版
            template: srcDir + outputHtmlName + '.html',
            // 生成出来的html文件名
            filename: distDir + outputHtmlName + '.html',
            // 自动将引用插入body
            inject: 'body',
            // title: outputHtmlName,
            // 每个html引用的js模块，也可以在这里加上vendor等公用模块
            // chunks: [entryFileName]
        }));
    }
}
getEntry();
plugins.push(new VueLoaderPlugin())

module.exports = {
  entry: {
    main: './static/main.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@configs': path.resolve(__dirname, 'configs'),
      '@servers': path.resolve(__dirname, 'configs/dev.js'),
      '@datas': path.resolve(__dirname, 'datas'),
      '@less': path.resolve(__dirname, 'less'),
    }
    // ,extensions: ['.js', '.vue'],
    // modules: [resolve('node_modules'), resolve('src')]
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
        // exclude: /node_modules/,//如果要次参数，需要吧element-ui的样式放在src
        // include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader', 'url-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    host: '0.0.0.0',
    port: 8080,
    //允许打开本地ip
    useLocalIp: true
  },
  optimization: {
    // 合并重复的代码块
    // mergeDuplicateChunks: true,
    // 移除父模块中已经存在的模块
    // removeAvailableModules: true,
    // name: 'common', // 指定公共 模块 的名称。
    // minChunks: 2, //(模块必须被2个 入口chunk 共享),只要是被两个及以上的chunk引用的公共代码都会被打包到公共模块中
    splitChunks: {
      // chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
      // minSize: 0, // 最小尺寸，默认0
      // minChunks: 1, // 最小 chunk ，默认1
      // maxAsyncRequests: 1, // 最大异步请求数， 默认1
      // maxInitialRequests: 1, // 最大初始化请求书，默认1
      // name: function () { }, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        // priority: 0, // 缓存组优先级
        commons: {//提取文件名称
          chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
          // test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
          name: "commons", // 要缓存的 分隔出来的 chunk 名称 
          // minSize: 0,
          minChunks: 1,
          // enforce: true,
          // maxAsyncRequests: 1, // 最大异步请求数， 默认1
          // maxInitialRequests: 1, // 最大初始化请求书，默认1
          // reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
        }
      }
    }
  }
}