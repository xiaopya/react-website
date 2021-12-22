const Router = require('koa-router');
const list = new Router();

list.get('/one', (ctx) => {
  ctx.body = 'list/one 页面';
});

module.exports = list;
