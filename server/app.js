const Koa = require('koa2');
const app = new Koa();
const router = require('./router');

// 端口号
const part = 4001;

// 路由中间件
app.use(router.routes(), router.allowedMethods);
router.use('/api', router.routes(), router.allowedMethods);

// 监听端口
app.listen(part, () => {
  console.log(`server is running at http://localhost:${part}`);
});
