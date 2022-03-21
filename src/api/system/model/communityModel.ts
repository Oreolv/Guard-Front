export interface CommunityListItem {
  id: number;
  name: string;
  custodian: string;
  createTime: string;
  description: string;
}

export interface CreateNewCommunityParams {
  name: string;
  custodian: number;
  description: string;
}

export type CommunityListGetResultModel = CommunityListItem[];
