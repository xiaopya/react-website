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
    ],
  },
  /**
   * 404 页面
   */
  {
    path: '/404',
    component: '@/pages/Access_Error/404',
  },
];
