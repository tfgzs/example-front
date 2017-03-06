/**
 * Created by Liutengfei on 2017/3/4.
 */
var serve = require('koa-static');
var koa = require('koa');
var app = new koa();
app.use(serve('./dist'));
app.listen(process.env.SERVER_PORT || 3000);
