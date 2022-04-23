import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface VisitorItem extends TimeStamp, BasicApplyResult {
  visitor: string;
  foreign: number;
  address: string;
  health_code: string;
}

export interface UpdateVisitorParams {
  id: number;
  status: number;
  description?: string;
}

export type GetVisitorListResultModel = VisitorItem[];
export type GetVisitorDetailResultModel = VisitorItem;
