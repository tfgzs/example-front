/**
 * Created by Liutengfei on 2017/3/4.
 */
var koa = require('koa');
var route = require('koa-route');
var app = new koa();

var querystring = require('querystring');
var service = require('./service/service.js');

var views = require('co-views');
var render = views('dist/views', {
	map: {
		html: 'ejs'
	}
});

var koa_static = require('koa-static-server')
app.use(koa_static({
	rootDir: './dist/static/',
	rootPath: '/static',
	maxage: 0
}));

//获取首页数据
app.use(route.get('/ajax/index', function* () {
	this.set('Cache-Control', 'no-cahe');
	this.body =service.get_index_data()
}));
//进入首页 
//http://localhost
app.use(route.get('/', function* () {
	this.set('Cache-Control', 'no-cahe');
	this.body = yield render('index', { });
}));
//搜索页面
//http://localhost/search
app.use(route.get('/search', function* () {
	this.set('Cache-Control', 'no-cahe');
	var params = querystring.parse(this.req._parsedUrl.query)
	var bookId = params.id;
	this.body = yield render('book', { bookId: bookId });
}));
//图书列表页面
//http://localhost/list
app.use(route.get('/list', function* () {
	this.set('Cache-Control', 'no-cahe');
	var params = querystring.parse(this.req._parsedUrl.query)
	var bookId = params.id;
	this.body = yield render('book', { bookId: bookId });
}));
//图书详情
//http://localhost/book?id=12
app.use(route.get('/book', function* () {
	this.set('Cache-Control', 'no-cahe');
	var params = querystring.parse(this.req._parsedUrl.query)
	var bookId = params.id;
	this.body = yield render('book', { bookId: bookId });
}));
//阅读页面
//http://localhost/reader
app.use(route.get('/reader', function* () {
	this.set('Cache-Control', 'no-cahe');
	var params = querystring.parse(this.req._parsedUrl.query)
	var bookId = params.id;
	this.body = yield render('book', { bookId: bookId });
}));




app.listen(process.env.SERVER_PORT || 80);
console.log('Koa server is started!')