//引入gulp模块
const gulp =require('gulp')
//引入htmlmin插件
const htmlmin = require('gulp-htmlmin');
//引入抽取html公共代码插件
const fileinclude = require('gulp-file-include');
//引入gulp-less模块
const less=require('gulp-less')
//引入gulp-csso模块
const csso=require('gulp-csso')
//引入gulp-babel模块
const babel=require('gulp-babel')
//引入se6压缩模块
var uglify = require('gulp-uglify');

//进行拷贝操作
//注意命令行gulp 后面加任务名first
gulp.task('first',()=>{
    console.log(7777);
    gulp.src('./src/css/base.css')
    .pipe(gulp.dest('dist/css'))
})
// html任务
// 1.html文件中代码的压缩操作
// 2.抽取html文件中的公共代码
gulp.task('htmlmin',()=>{
    //先抽取后压缩
    console.log('进行html压缩');
    //先获取html
    gulp.src('./src/*.html')
    .pipe(fileinclude())
    //设置压缩空格
    .pipe(htmlmin({ collapseWhitespace: true }))
    //输出路径
    .pipe(gulp.dest('dist'))

})
// css任务
// 1.less语法转换
// 2.css代码压缩
gulp.task('less',()=>{
    gulp.src(['./src/css/*.css','./src/css/*.less'])
    //处理less转换
    .pipe(less())
    //处理css压缩
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
})
// js任务
// 1.es6代码转换
// 2.代码压缩
gulp.task('js',()=>{
    gulp.src('./src/js/a.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
// 复制文件夹
gulp.task('copy',()=>{
    gulp.src('./src/images/*')
      .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/sweetalert/*')
      .pipe(gulp.dest('dist/lib/sweetalert'))
})
//构建任务,依次执行
gulp.task('default',['htmlmin','less','js','copy']);