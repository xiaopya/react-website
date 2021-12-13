export default [
  /**
   * 主页
   */
  {
    exact: true,
    path: '/',
    component: 'index',
  },

  {
    path: '/one',
    component: '@/pages/Two',
  },
  /**
   * 404 页面
   */
  {
    component: '@/pages/404',
  },
];
