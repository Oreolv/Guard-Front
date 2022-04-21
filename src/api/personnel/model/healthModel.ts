import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';
import { StatusEnum } from '/@/enums/residentEnum';

export interface HealthItem extends TimeStamp, BasicApplyResult {
  temperature: string;
  diagnosis: StatusEnum;
  contact: StatusEnum;
  symptom: StatusEnum;
  hospital: string;
}

export interface UpdateHealthParams {
  id: number;
  status?: number;
  description: string;
}

export type GetHealthListResultModel = HealthItem[];
export type GetHealthDetailResultModel = HealthItem;
