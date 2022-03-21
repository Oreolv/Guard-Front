/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  roleValue: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  userId: string | number;
  realName: string;
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
  roleValue: string;
}

export interface UpdateUserInfoParams {
  realName: string;
  uphone: string;
}

export interface UpdateUserSysParams {
  username: string;
  realName: string;
  roleName: string;
  roleValue: string;
  uphone: string;
}

export interface UpdateUserPasswordParams {
  passwordOld: string;
  passwordNew: string;
}

export interface GetUserListModel {
  userId: string | number;
  username: string;
  realName: string;
  roleName: string;
  roleValue: string;
  uphone: string;
}

export interface CreateNewUserParams {
  username: string;
  realName: string;
  roleName: string;
  roleValue: string;
  uphone: string;
}
