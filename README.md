# 前端开发脚手架
---

### 技术栈:
- koa
- gulp
- bower
- docker
- webpack

## 开发规范
-  `favicon.ico`图标放到 	`src/`					目录下
-  所有的`js`	文件放到  	`src/static/js/`		目录下
-  所有的`图片`	文件放到 	`src/static/img/`		目录下
-  所有的`字体`	文件放到 	`src/static/font/`		目录下
-  所有的`css`	文件放到 	`src/static/css/`		目录下
-  所有的`less`	文件放到		`src/static/css/`		目录下
-  所有的`html`	文件放到 	`src/html/`				目录下

 `注意：src/static/css/ 目录下不要创建文件名相同的两个less和css文件，防止文件覆盖` 
 `注意：src/static/js/和src/static/css/不要再创建子目录，如果要分模块，用"-"链接 `

## 开发环境测试流程
1. 生产环境上安装node环境
2. 安装全局依赖 	`npm install -g gulp`
3. 安装本地依赖 	`npm install`
4. 编译并运行   	`gulp`
5. 浏览器访问	`http://localhost:80`
 
## 生产环境上线流程
1. 生产环境上安装node环境
2. 安装全局依赖 `npm install -g gulp`
3. 安装本地依赖 `npm install`
4. 添加系统环境变量 
	- `NODE_ENV=production`
	- `App_Name=项目名`
	- `App_Version=版本号`
5. 编译源码文件 `gulp build`
6. 运行 `npm start`
7. 浏览器访问 `http://localhost:80`

## gulp常用插件
- gulp-jshint 检查js文件是否有报错或警告
- gulp-uglify 压缩js文件
- webpack-stream js打包

- gulp-css-spriter 雪碧图/精灵图
- gulp-sass 编译sass变为css
- gulp-less 编译less变为css
- gulp-cssmin css压缩
- gulp-minify-css 压缩css文件（压缩后，不便于调试）
- gulp-cssbeautify 格式化css代码（美化，便于调试）

- gulp-minify-html html压缩
- gulp-htmlmin html压缩

- gulp-imagemin 最小化图像

- gulp-concat 将多个文件合并为一个
- gulp-rename 重命名文件
- gulp-file-include 文件插入
- gulp-watch 监听文件的新建和删除
- gulp-plumber 防止出错推出文件监控

- gulp-md5-plus避免浏览器读取了旧的缓存文件，需要为其添加md5戳
- gulp-rev 对文件名加MD5后缀
- gulp-rev-collector 路径替换

- gulp-open	打开浏览器





