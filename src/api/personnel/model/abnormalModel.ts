import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';
import { StatusEnum } from '/@/enums/residentEnum';

export interface AbnormalItem extends TimeStamp, BasicApplyResult {
  temperature: string;
  diagnosis: StatusEnum;
  contact: StatusEnum;
  symptom: StatusEnum;
  hospital: string;
}

export interface UpdateAbnormalParams {
  id: number;
  status?: number;
  description: string;
}

export type GetAbnormalListResultModel = AbnormalItem[];
export type GetAbnormalDetailResultModel = AbnormalItem;
