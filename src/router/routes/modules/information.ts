import type { AppRouteModule } from '/@/router/types';
import { RoleEnum } from '/@/enums/roleEnum';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/information',
  name: 'information',
  component: LAYOUT,
  redirect: '/information/notice',
  meta: {
    icon: 'ant-design:notification-outlined',
    title: '资讯管理',
    orderNo: 100000,
    roles: [RoleEnum.SUPER, RoleEnum.TEST, RoleEnum.COMMUNITY, RoleEnum.NEWS],
  },
  children: [
    {
      path: 'notice',
      name: 'NoticeManagement',
      component: () => import('/@/views/information/notice/index.vue'),
      meta: {
        title: '社区公告',
        roles: [RoleEnum.SUPER, RoleEnum.TEST, RoleEnum.COMMUNITY],
      },
    },
    {
      path: 'tips',
      name: 'TipsManagement',
      component: () => import('/@/views/information/tips/index.vue'),
      meta: {
        title: '防疫知识',
        roles: [RoleEnum.SUPER, RoleEnum.TEST, RoleEnum.COMMUNITY, RoleEnum.NEWS],
      },
    },
    {
      path: 'news',
      name: 'NewsManagement',
      component: () => import('/@/views/information/news/index.vue'),
      meta: {
        title: '疫情新闻',
        roles: [RoleEnum.SUPER, RoleEnum.TEST, RoleEnum.COMMUNITY, RoleEnum.NEWS],
      },
    },
  ],
};

export default dashboard;
