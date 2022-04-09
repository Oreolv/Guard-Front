import type { AppRouteModule } from '/@/router/types';
import { RoleEnum } from '/@/enums/roleEnum';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/role',
  meta: {
    icon: 'ion:settings',
    title: '系统管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'user',
      name: 'UserManagement',
      component: () => import('/@/views/system/user/index.vue'),
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'role',
      name: 'RoleManagement',
      component: () => import('/@/views/system/role/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'account',
      name: 'accountSetting',
      component: () => import('/@/views/system/account/index.vue'),
      meta: {
        title: '个人设置',
      },
    },
    {
      path: 'community',
      name: 'communityManagement',
      component: () => import('/@/views/system/community/index.vue'),
      meta: {
        title: '社区管理',
      },
    },
  ],
};

export default dashboard;
