import type { AppRouteModule } from '/@/router/types';
// import { RoleEnum } from '/@/enums/roleEnum';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/information',
  name: 'information',
  component: LAYOUT,
  redirect: '/information/notice',
  meta: {
    icon: 'ion:people',
    title: '资讯管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'notice',
      name: 'NoticeManagement',
      component: () => import('/@/views/information/notice/index.vue'),
      meta: {
        title: '公告管理',
      },
    },
  ],
};

export default dashboard;
