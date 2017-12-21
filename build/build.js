// https://github.com/shelljs/shelljs
require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

var rootPath = path.resolve(__dirname,'../');
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var filesPath = path.join(config.build.assetsRoot, config.build.assetsSavePath)
//如果文件生成目录是根目录，则不删除所在目录文件
if(rootPath !== assetsPath){
  shell.rm('-rf', assetsPath)
  shell.mkdir('-p', assetsPath)
  shell.config.silent = true
  // shell.cp('-R', 'web/bundle/*', assetsPath)
  // shell.config.silent = false
}

//如果文件生成目录是根目录，则不删除所在目录文件以及不使用该目录
if(assetsPath !== filesPath&&rootPath!==filesPath){
  shell.rm('-rf', filesPath)
  shell.mkdir('-p', filesPath)
  shell.config.silent = true
}
webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))

  //假如文件生成目录与临时存放目录不一致且生成目录是根目录时，把对应文件夹放到临时存放目录
  if(assetsPath !== filesPath && assetsPath === rootPath){
    var fileTypes = config.build.fileTypes;
    var filePath = '';
    for(var i in fileTypes){
      filePath = path.resolve(__dirname,assetsPath+"/"+fileTypes[i]);
      shell.cp('-R', filePath, filesPath);
      shell.rm('-rf', filePath);
      shell.config.silent = false
    }
  }
})

