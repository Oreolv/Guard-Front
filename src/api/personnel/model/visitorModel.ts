import { TimeStamp, UserInfo } from '/@/api/model/baseModel';

export interface VisitorItem extends TimeStamp {
  id: number;
  status: number;
  applicant: number;
  visitor: string;
  foreign: number;
  address: string;
  healthCode: string;
  approver: number;
  approverInfo: UserInfo;
  startTime: string;
  endTime: string;
}

export type GetVisitorListResultModel = VisitorItem[];
