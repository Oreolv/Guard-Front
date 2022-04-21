import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface AgencyItem extends TimeStamp, BasicApplyResult {
  type: string;
  content: string;
}

export interface UpdateAgencyParams {
  id: number;
  status: number;
  description?: string;
}

export type GetAgencyListResultModel = AgencyItem[];
export type GetAgencyDetailResultModel = AgencyItem;
