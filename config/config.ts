import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // 关闭antd 避免影响全局
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: routes,
});
