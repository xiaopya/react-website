export default [
  /**
   * 主页
   */
  {
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        redirect: '/todolist',
      },
      {
        path: '/home',
        component: '@/pages/Home',
      },
      {
        path: '/todolist',
        component: '@/pages/Todolist',
      },
      /**
       * 404 页面
       */
      {
        component: '@/pages/404',
      },
    ],
  },
];
