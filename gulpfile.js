'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var connect = require('gulp-connect');
var rev = require('gulp-rev'); //对文件名加MD5后缀
var less = require('gulp-less'); //编译less文件
var cssmin = require('gulp-cssmin'); //压缩css文件
var clean = require('gulp-clean'); //删除文件
var uglify = require('gulp-uglify'); //压缩js
var minifyHTML = require('gulp-minify-html'); //压缩html
var revCollector = require('gulp-rev-collector'); //路径替换
var prettify = require('gulp-jsbeautifier'); //js/css/html代码美化
var gulpSequence = require('gulp-sequence'); //控制task执行顺序
var zip = require('gulp-zip'); //压缩文件
var config = require("./config");

//从环境变量里面获取是否需要压缩代码，
//生产环境:需要压缩css/js/html以减少用户打开网页时占用的宽带，
//测试环境和开发环境:不需要压缩css/js/html，并给以美化,便于调试
var compressedCode = config.compressedCode;


//启动本地服务器
gulp.task('serve', function() {
	connect.server({
		root: './dist',
		port: 80,
		livereload: true
	});
	// 实时监听源文件的变化,及时编译源文件并自动页面刷新
	gulp.watch('src/static/css/*.less', function(event) {
		gulpSequence('build:less', 'build:html', 'livereload:css')(function(err) {
			if(err) console.log(err)
		})
	});
	gulp.watch('src/static/css/*.css', function(event) {
		gulpSequence('build:css', 'build:html', 'livereload:css')(function(err) {
			if(err) console.log(err)
		})
	})
	gulp.watch('src/static/js/*.js', function(event) {
		gulpSequence('build:js', 'build:html', 'livereload:js')(function(err) {
			if(err) console.log(err)
		})
	})
	gulp.watch('src/templates/**/*.html', function(event) {
		gulpSequence('build:html', 'livereload:html')(function(err) {
			if(err) console.log(err)
		})
	})
});
gulp.task('livereload:css', function() {
	gulp.src(['dist/static/css/*.css', 'dist/**/*.html']).pipe(connect.reload());
});
gulp.task('livereload:js', function() {
	gulp.src(['dist/static/js/*.js', 'dist/**/*.html']).pipe(connect.reload());
});
gulp.task('livereload:html', function() {
	gulp.src(['dist/**/*.html']).pipe(connect.reload());
});
//压缩css文件->加Md5后缀->拷贝
gulp.task('build:css', function() {
	return gulp.src('src/static/css/*.css')
		.pipe(gulpif(compressedCode, cssmin(), prettify()))
		.pipe(rev())
		.pipe(gulp.dest('dist/static/css', {
			mode: '0644'
		}))
		.pipe(rev.manifest())
		.pipe(gulp.dest('dist/rev/static/css', {
			mode: '0644'
		}));
});
//less文件编译为css文件->压缩css文件->加Md5后缀->拷贝
gulp.task('build:less', function() {
		return gulp.src('src/static/css/*.less')
			.pipe(less())
			.pipe(gulpif(compressedCode, cssmin(), prettify()))
			.pipe(rev())
			.pipe(gulp.dest('dist/static/css/', {
				mode: '0644'
			}))
			.pipe(rev.manifest())
			.pipe(gulp.dest('dist/rev/static/less', {
				mode: '0644'
			}));
	})
	//压缩js文件->加Md5后缀->拷贝
gulp.task('build:js', function() {
	return gulp.src('src/static/js/*.js')
		.pipe(rev())
		.pipe(gulpif(compressedCode, uglify(), prettify()))
		.pipe(gulp.dest('dist/static/js', {
			mode: '0644'
		}))
		.pipe(rev.manifest())
		.pipe(gulp.dest('dist/rev/static/js', {
			mode: '0644'
		}));
});
//替换html中的内容
gulp.task('build:html', ['build:less', 'build:css', 'build:js'], function() {
	return gulp.src(['dist/rev/**/*.json', 'src/templates/**/*.html'])
		.pipe(revCollector({
			replaceReved: true
		}))
		.pipe(gulpif(compressedCode, minifyHTML({
			empty: true,
			spare: true
		}), prettify()))
		.pipe(gulp.dest('dist', {
			mode: '0644'
		}));
});

//把src目录下面的文件压缩之后拷贝到dist目录下
gulp.task('build:all', ['build:html'], function() {
	//js/css/html 之外的所有文件都直接拷贝,给文件设置权限0644：当前用户拥有读写权限，其他的用户只有只读权限
	gulp.src(['src/**/*.*', '!src/static/css/*.+(css|less)', '!src/static/js/*.js', '!src/templates/**/*.html', ])
		.pipe(gulp.dest('dist/', {
			mode: '0644'
		}))
});
//清理dist目录下的文件
gulp.task('clean', function() {
	gulp.src(['./dist'], {
		read: false
	}).pipe(clean());
});
//编译之后打包文件
gulp.task('zip', ['build'],function() {
	return gulp.src('dist/**/*')
		.pipe(zip(config.appName + '-' + config.version + '.zip'))
		.pipe(gulp.dest('release'))
});
//编译文件
gulp.task('build', function(cb) {
	gulpSequence('clean', 'build:all')(cb);
});
//测试环境：启动本地服务器、修改代码后自动加载实时预览、不压缩代码
gulp.task('test', function(cb) {
	gulpSequence('clean', 'build:all', 'serve')(cb);
});
gulp.task('default', ['test'], function() {
	console.log('')
	console.log()
	console.log('           昨夜西风凋碧树。独上高楼，望尽天涯路。')
	console.log('           衣带渐宽终不悔，为伊消得人憔悴。')
	console.log('           众里寻她千百度，蓦然回首，那人却在灯火阑珊处。')
	console.log('')
	console.log('')
});