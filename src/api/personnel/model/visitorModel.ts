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
  description: string;
  startTime: string;
  endTime: string;
}

export interface UpdateVisitorParams {
  id: number;
  status: number;
  description?: string;
}

export type GetVisitorListResultModel = VisitorItem[];
export type GetVisitorDetailResultModel = VisitorItem;
