/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  id: number;
  role_name: string;
  role_value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  roles: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  userId: string | number;
  real_name: string;
  avatar: string;
  roles: RoleInfo[];
  cname?: string;
  rname?: string;
  bname?: string;
  uphone: string;
  homePath?: string | undefined;
}

export interface GetUserListParams {
  username: string;
  role_value: string;
}

export interface UpdateUserInfoParams {
  real_name: string;
  uphone: string;
}

export interface UpdateUserSysParams {
  username: string;
  real_name: string;
  role_id: number;
  uphone: string;
}

export interface UpdateUserPasswordParams {
  passwordOld: string;
  passwordNew: string;
}

export interface GetUserListModel {
  userId: string | number;
  username: string;
  real_name: string;
  role_id: number;
  roles: RoleInfo;
  uphone: string;
}

export interface CreateNewUserParams {
  username: string;
  real_name: string;
  role_id: number;
  uphone: string;
}
