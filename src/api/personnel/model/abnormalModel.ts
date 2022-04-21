import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface AbnormalItem extends TimeStamp, BasicApplyResult {
  type: string;
  content: string;
}

export interface UpdateAbnormalParams {
  id: number;
  status: number;
  description?: string;
}

export type GetAbnormalListResultModel = AbnormalItem[];
export type GetAbnormalDetailResultModel = AbnormalItem;
