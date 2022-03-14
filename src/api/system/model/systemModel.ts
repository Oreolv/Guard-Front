export interface RoleListItem {
  id: number;
  roleName: string;
  roleValue: string;
  createTime: string;
  description: string;
}

export interface CreateRoleParams {
  roleName: string;
  roleValue: string;
  description?: string;
}

export type RoleListGetResultModel = RoleListItem[];

export type CreateRolePostResultModel = RoleListItem[];
