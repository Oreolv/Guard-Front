import {
  RoleListGetResultModel,
  CreateRolePostResultModel,
  CreateRoleParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  RoleList = '/role/getRoleList',
  CreateRole = '/role/createNewRole',
}

export const getRoleList = () => defHttp.get<RoleListGetResultModel>({ url: Api.RoleList });
export const createNewRole = (params: CreateRoleParams) =>
  defHttp.post<CreateRolePostResultModel>(
    {
      url: Api.CreateRole,
      params,
    },
    { showSuccessMessage: true },
  );
