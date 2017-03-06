# 前端开发脚手架
---

## 开发规范
-  `favicon.ico`图标放到 		`src/`					目录下
-  所有的`js`	文件放到  	`src/static/js/`		目录下
-  所有的`图片`	文件放到 	`src/static/img/`		目录下
-  所有的`字体`	文件放到 	`src/static/font/`		目录下
-  所有的`css`	文件放到 	`src/static/css/`		目录下
-  所有的`less`	文件放到		`src/static/css/`		目录下
-  所有的`html`	文件放到 	`src/views/`			目录下

 `注意：src/static/css/ 目录下不要创建文件名相同的两个less和css文件，防止文件覆盖` 
 `注意：src/static/js/和src/static/css/不要再创建子目录，如果要分模块，用"-"链接 `

## 开发环境测试流程
1. 生产环境上安装node环境
2. 安装全局依赖 	
	- `npm install -g gulp`
	- `npm install -g bower`
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

## git 常用命令 
- `git branch -a` 列出所有本地分支和远程分支
- `git branch [branch-name]` 新建一个分支，但依然停留在当前分支
- `git checkout  [branch]`   切换到某分支
- `git checkout -b [branch]` 新建一个分支，并切换到该分支
- `git add .` 当前目录所有都加入到暂存区
- `git commit -m "注释"` 提交代码
- `git push` 推送代码到远程仓库

## npm 常用命令
- `npm config set registry https://registry.npm.taobao.org` 以后使用`npm install`时从淘宝镜像仓库下载，防止被墙，提高下载速度
- `npm init` 初始化一个node项目
- `npm install -g gulp` 		全局安装gulp依赖
- `npm install jquery` 		安装jquery依赖到当前目录下的`node_modules`文件夹中
- `npm install --save koa` 安装koa到当前目录下的`node_modules`文件夹中，并把依赖关系保存到`package.json`文件中的`dependencies`节点
- `npm install --save-dev gulp`安装gulp到当前目录下的`node_modules`文件夹中，并把依赖关系保存到`package.json`文件中的`devDependencies`节点
- `npm uninstall --sava koa` 	卸载koa依赖
- `npm uninstall --save-dev gulp` 卸载gulp依赖
- `npm install ` 安装当前所在目录`package.json`文件中的依赖

## gulp常用插件
- `gulp-jshint` 检查js文件是否有报错或警告
- `gulp-uglify` 压缩混淆js文件
- `gulp-css-spriter` 雪碧图/精灵图
- `gulp-sass` 编译sass变为css
- `gulp-less` 编译less变为css
- `gulp-cssmin` css压缩
- `gulp-minify-css` 压缩css文件（压缩后，不便于调试）
- `gulp-cssbeautify` 格式化css代码（美化，便于调试）
- `gulp-minify-html` html压缩
- `gulp-htmlmin` html压缩
- `gulp-imagemin` 最小化图像
- `gulp-concat` 将多个文件合并为一个
- `gulp-rename` 重命名文件
- `gulp-file-include` 文件插入
- `gulp-watch` 监听文件的新建和删除
- `gulp-plumber` 防止出错推出文件监控
- `gulp-md5-plus`避免浏览器读取了旧的缓存文件，需要为其添加md5戳
- `gulp-rev` 对文件名加MD5后缀
- `gulp-rev-collector` 路径替换
- `gulp-open`	打开浏览器

## node常用模块
- `chalk`  定制控制台日志的输入样式




