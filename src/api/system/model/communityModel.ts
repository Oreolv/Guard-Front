export interface CommunityListItem {
  id: number;
  name: string;
  custodian: string;
  createTime: string;
  description: string;
}

export interface createCommunityParams {
  name: string;
  custodian: number;
  description: string;
  realName: string;
}

export type UpdateCommunityParams = Omit<CommunityListItem, 'createTime'>;

export type CommunityListGetResultModel = CommunityListItem[];
