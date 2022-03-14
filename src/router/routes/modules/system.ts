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
    roles: [RoleEnum.SUPER, RoleEnum.TEST],
  },
  children: [
    {
      path: 'role',
      name: 'RoleManagement',
      component: () => import('/@/views/system/role/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
  ],
};

export default dashboard;
