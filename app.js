 const Koa = require('koa');
 const app = new Koa();
 const port = 9080

const sequelize= require('./config.js');
const koaBody = require('koa-body')
app.use(koaBody());
const router = require('./router')

app.use(router.routes());
app.use(router.allowedMethods())
app.use(() => ctx.body = 'Server Ok!');

app.listen(port); 
