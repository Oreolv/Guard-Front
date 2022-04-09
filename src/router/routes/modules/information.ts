import type { AppRouteModule } from '/@/router/types';
// import { RoleEnum } from '/@/enums/roleEnum';
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
  },
  children: [
    {
      path: 'notice',
      name: 'NoticeManagement',
      component: () => import('/@/views/information/notice/index.vue'),
      meta: {
        title: '社区公告',
      },
    },
    {
      path: 'news',
      name: 'NewsManagement',
      component: () => import('/@/views/information/news/index.vue'),
      meta: {
        title: '疫情新闻',
      },
    },
  ],
};

export default dashboard;
