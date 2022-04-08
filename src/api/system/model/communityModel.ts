import { TimeStamp, UserInfo } from '/@/api/model/baseModel';

export interface CommunityListItem extends TimeStamp {
  id: number;
  name: string;
  custodian: string;
  description: string;
  custodianInfo: UserInfo;
}

export interface createCommunityParams {
  name: string;
  custodian: number;
  description: string;
  realName: string;
}

export type UpdateCommunityParams = Omit<CommunityListItem, 'custodianInfo'>;

export type CommunityListGetResultModel = CommunityListItem[];
