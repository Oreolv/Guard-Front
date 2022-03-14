import { RoleListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  RoleList = '/role/getRoleList',
}

export const getRoleList = () => defHttp.get<RoleListGetResultModel>({ url: Api.RoleList });
