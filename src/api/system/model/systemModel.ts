export interface RoleListItem {
  id: number;
  roleName: string;
  roleValue: string;
  createTime: string;
  description: string;
}

export type RoleListGetResultModel = RoleListItem[];
