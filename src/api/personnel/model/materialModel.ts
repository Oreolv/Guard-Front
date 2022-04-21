import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface MaterialItem extends TimeStamp, BasicApplyResult {
  type: string;
  content: string;
}

export interface UpdateMaterialParams {
  id: number;
  status: number;
  description?: string;
}

export type GetMaterialListResultModel = MaterialItem[];
export type GetMaterialDetailResultModel = MaterialItem;
