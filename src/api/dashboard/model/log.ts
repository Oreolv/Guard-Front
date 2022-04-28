import { TimeStamp, UserInfo } from '/@/api/model/baseModel';

export interface LogListItem extends TimeStamp {
  id: number;
  method: string;
  group: string;
  members: string;
  params: string;
  userId: number;
  userInfo: UserInfo;
}

export type GetLogListResultModel = LogListItem[];
