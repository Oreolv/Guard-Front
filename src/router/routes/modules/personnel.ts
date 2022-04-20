import type { AppRouteModule } from '/@/router/types';
// import { RoleEnum } from '/@/enums/roleEnum';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/personnel',
  name: 'personnel',
  component: LAYOUT,
  redirect: '/personnel/resident',
  meta: {
    icon: 'ion:people',
    title: '防疫管理',
    orderNo: 100000,
  },
  children: [
    {
      path: 'resident',
      name: 'ResidentManagement',
      component: () => import('/@/views/personnel/resident/index.vue'),
      meta: {
        title: '居民管理',
      },
    },
    {
      path: 'visitor',
      name: 'VisitorManagement',
      component: () => import('/@/views/personnel/visitor/index.vue'),
      meta: {
        title: '访客审批',
        ignoreKeepAlive: false,
      },
    },
    {
      path: 'visitor_detail/:id',
      name: 'VisitorDetail',
      meta: {
        title: '查看详情',
        hideMenu: true,
        showMenu: false,
        ignoreKeepAlive: true,
        currentActiveMenu: '/personnel/visitor',
      },
      component: () => import('/@/views/personnel/visitor/VisitorDetail.vue'),
    },
    {
      path: 'trip',
      name: 'TripManagement',
      component: () => import('/@/views/personnel/trip/index.vue'),
      meta: {
        title: '行程审批',
        ignoreKeepAlive: false,
      },
    },
    {
      path: 'trip_detail/:id',
      name: 'TripDetail',
      meta: {
        title: '查看详情',
        hideMenu: true,
        showMenu: false,
        ignoreKeepAlive: true,
        currentActiveMenu: '/personnel/trip',
      },
      component: () => import('/@/views/personnel/trip/TripDetail.vue'),
    },
    {
      path: 'back',
      name: 'BackManagement',
      component: () => import('/@/views/personnel/back/index.vue'),
      meta: {
        title: '返乡报备',
        ignoreKeepAlive: false,
      },
    },
    {
      path: 'back_detail/:id',
      name: 'BackDetail',
      meta: {
        title: '查看详情',
        hideMenu: true,
        showMenu: false,
        ignoreKeepAlive: true,
        currentActiveMenu: '/personnel/back',
      },
      component: () => import('/@/views/personnel/back/BackDetail.vue'),
    },
    {
      path: 'abnormal',
      name: 'AbnormalManagement',
      component: () => import('/@/views/personnel/abnormal/index.vue'),
      meta: {
        title: '异常报备',
      },
    },
  ],
};

export default dashboard;
