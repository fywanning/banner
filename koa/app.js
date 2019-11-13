const Koa=require('koa')
const app=new Koa()
const static=require('koa-static')
const path=require('path')
const bodyparser=require('koa-bodyparser')
const router=require('koa-router')
const query=require('./db/home')

app.use(static(path.join(process.cwd(),'public')))
app.use(bodyparser())
app.use(router.routes(),router.allowedMethods())

router.length('/api/list',async)