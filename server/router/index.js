const Router = require('koa-router');
const router = new Router();
const list = require('./list');

// 基于list 路由
router.use('/list', list.routes(), list.allowedMethods);

// 导出
module.exports = router;
