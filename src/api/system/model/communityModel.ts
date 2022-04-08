import { TimeStamp } from '/@/api/model/baseModel';

interface Users {
  id: number;
  username: string;
  realName: string;
}
export interface CommunityListItem extends TimeStamp {
  id: number;
  name: string;
  description: string;
  users: Users[];
}

export interface createCommunityParams {
  name: string;
  description: string;
  custodian: number[];
}

export interface UpdateCommunityParams {
  id: number;
  name: string;
  description: string;
  custodian: number[];
}

export type CommunityListGetResultModel = CommunityListItem[];
