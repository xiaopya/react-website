import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  // 关闭antd 避免影响全局
  // antd: false,
  layout: false,
  nodeModulesTransform: {
    type: 'none',
  },
  // 修改icon
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    { rel: 'icon', href: '../public/favico.ico' },
  ],
  // 修改title
  title: '小陈同学',
  fastRefresh: {},
  routes,
  // 接口代理
  proxy: {
    '/api': {
      target: 'http://localhost:4001',
    },
  },
});
