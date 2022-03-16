import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  UpdateUserInfoParams,
} from './model/userModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/users/login',
  GetUserInfo = '/users/getUserInfo',
  UpdateUserInfo = '/users/updateUserInfo',
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
