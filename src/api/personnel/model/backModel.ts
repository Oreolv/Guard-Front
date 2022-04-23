import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';
import { VehicleEnum, HealthEnum as RiskStatusEnum } from '/@/enums/residentEnum';

export interface BackItem extends TimeStamp, BasicApplyResult {
  vehicle: VehicleEnum;
  vehicle_no: string;
  vehicle_seat: string;
  risk_status: RiskStatusEnum;
  health_code: string[];
  come_from: string;
}

export interface UpdateBackParams {
  id: number;
  status: number;
  description?: string;
}

export type GetBackListResultModel = BackItem[];
export type GetBackDetailResultModel = BackItem;
