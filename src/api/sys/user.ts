import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  UpdateUserInfoParams,
  UpdateUserPasswordParams,
} from './model/userModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/users/login',
  GetUserInfo = '/users/getUserInfo',
  UpdateUserInfo = '/users/updateUserInfo',
  UpdateUserAvatar = '/users/updateUserAvatar',
  UpdateUserPassword = '/users/updateUserPassword',
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
