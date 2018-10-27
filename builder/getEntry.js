const path = require('path');
const glob = require("glob");

const srcDir = path.resolve(__dirname, './static');
const distDir = path.resolve(__dirname, './dist');
const plugins = [];

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    let files = glob.sync(srcDir+'/**/*.html'),
        entry = {},
        entryFileName,
        outputHtmlName;
    for(let i = 0; i < files.length; i++){
        let matchs = /static\/(\S*).html/.exec(files[i])
        entryFileName = outputHtmlName = matchs[1]; //得到page/index这样的文件名
        if(/^_\w*/.test(entryFileName) || /\/_\w*/.test(entryFileName))
        {
            continue;
        }
        entryFileName = 'js/'+entryFileName;
        entry[entryFileName] = files[i]
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
    console.log('> entry' + JSON.stringify(entry))
    return entry;
  }