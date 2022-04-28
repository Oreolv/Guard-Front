import { TimeStamp, UserInfo, ResidentInfo } from '/@/api/model/baseModel';

export interface UlogListItem extends TimeStamp {
  id: number;
  method: string;
  group: string;
  members: string;
  params: string;
  userId: number;
  userInfo: UserInfo;
}

export interface RlogListItem extends TimeStamp {
  id: number;
  method: string;
  group: string;
  members: string;
  params: string;
  userId: number;
  residentInfo: ResidentInfo;
}

export type GetUlogListResultModel = UlogListItem[];

export type GetRlogListResultModel = RlogListItem[];
