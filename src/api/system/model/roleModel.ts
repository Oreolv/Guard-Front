export interface RoleListItem {
  id: number;
  role_name: string;
  role_value: string;
  description: string;
}

export interface CreateRoleParams {
  role_name: string;
  role_value: string;
  description?: string;
}

export type UpdateRoleParams = RoleListItem;

export type RoleListGetResultModel = RoleListItem[];

export type CreateRolePostResultModel = RoleListItem[];
