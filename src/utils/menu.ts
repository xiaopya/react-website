// 菜单的配置项，用于动态渲染 key:  唯一标志 title: 菜单项值 path：用于路由跳转
export const menus = [
  { key: 'todolist', title: 'TODOLIST', path: '/todolist' },
  {
    key: 'menus',
    title: 'menus',
    children: [
      { key: 'menus1', title: 'menus1', path: '/menus1' },
      { key: 'menus2', title: 'menus2', path: '/menus2' },
    ],
  },
];
