export interface CommunityListItem {
  id: number;
  name: string;
  createTime: string;
  description: string;
  status: number;
  children: CommunityListChildrenItem[] | [];
}

export interface CommunityListChildrenItem {
  id: number;
  name: string;
  createTime: string;
  description: string;
  status: number;
  parentName: number;
}

export interface CreateNewCommunityParams {
  name: string;
  custodian: number;
  description: string;
}

export type CommunityListGetResultModel = CommunityListItem[];
