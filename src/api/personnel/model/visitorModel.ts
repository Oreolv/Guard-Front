import { TimeStamp, UserInfo, ResidentInfo } from '/@/api/model/baseModel';

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
  applicantInfo: ResidentInfo;
  startTime: string;
  endTime: string;
}

export type GetVisitorListResultModel = VisitorItem[];
export type GetVisitorDetailResultModel = VisitorItem;
