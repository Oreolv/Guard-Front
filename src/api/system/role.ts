import {
  RoleListGetResultModel,
  CreateRolePostResultModel,
  CreateRoleParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  RoleList = '/role/getRoleList',
  CreateRole = '/role/createNewRole',
  RemoveRole = '/role/removeRole',
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

export const RemoveRole = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveRole}?id=${id}`,
    },
    { showSuccessMessage: true },
  );
