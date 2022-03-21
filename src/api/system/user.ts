import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  GetUserListModel,
  CreateNewUserParams,
  UpdateUserInfoParams,
  UpdateUserPasswordParams,
} from './model/userModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/users/login',
  GetUserInfo = '/users/getUserInfo',
  GetUserList = '/users/getUserList',
  UpdateUserInfo = '/users/updateUserInfo',
  UpdateUserAvatar = '/users/updateUserAvatar',
  UpdateUserPassword = '/users/updateUserPassword',
  CreateNewUser = '/users/createNewUser',
  RemoveUser = '/users/removeUser',
}
/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
export function updateUserInfo(params: UpdateUserInfoParams) {
  return defHttp.put<void>(
    { url: Api.UpdateUserInfo, params },
    { errorMessageMode: 'none', showSuccessMessage: true },
  );
}
/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getUserList() {
  return defHttp.get<GetUserListModel>({ url: Api.GetUserList }, { errorMessageMode: 'none' });
}

export function updateUserAvatar(avatar: string) {
  const params = { avatar: avatar };
  return defHttp.put<void>({ url: Api.UpdateUserAvatar, params }, { errorMessageMode: 'none' });
}

export function updateUserPassword(params: UpdateUserPasswordParams) {
  return defHttp.put<void>(
    { url: Api.UpdateUserPassword, params },
    { errorMessageMode: 'message', showSuccessMessage: true },
  );
}

export const createNewUser = (params: CreateNewUserParams) =>
  defHttp.post<void>({ url: Api.CreateNewUser, params });

export const removeUser = (id: number) =>
  defHttp.delete<void>(
    {
      url: `${Api.RemoveUser}?id=${id}`,
    },
    { showSuccessMessage: true },
  );
