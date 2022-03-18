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

export type CommunityListGetResultModel = CommunityListItem[];
