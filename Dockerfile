# 基于node:5.10.1的node镜像
FROM node:5.10.1

# 国外nodejs的npm仓库因为被墙，网速太慢，可以使用淘宝的镜像，提可以高下载速度
RUN   \
  npm config set registry "https://registry.npm.taobao.org"

# 全局安装gulp
RUN   \
  npm install -g gulp

# 设置环境变量——运行环境：生产环境
ENV NODE_ENV     production

# 设置环境变量——服务器端口:80
ENV SERVER_PORT   80

# 当前目录所有内容拷贝到容器中的app文件夹下
COPY . /app

# 进入容器的app文件夹
WORKDIR   /app

# 下载依赖
RUN   \
  npm install

# 编译代码
RUN   \
  gulp build


# 容器运行的时候监听80端口
EXPOSE  80

# 执行npm start正式运行
CMD ["npm", "start"]
