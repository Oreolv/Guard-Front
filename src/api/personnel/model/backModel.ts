import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';
import { VehicleEnum, HealthEnum as RiskStatusEnum } from '/@/enums/residentEnum';

export interface BackItem extends TimeStamp, BasicApplyResult {
  vehicle: VehicleEnum;
  vehicleNo: string;
  vehicleSeat: string;
  riskStatus: RiskStatusEnum;
  healthCode: string[];
  comeFrom: string;
}

export interface UpdateBackParams {
  id: number;
  status: number;
  description?: string;
}

export type GetBackListResultModel = BackItem[];
export type GetBackDetailResultModel = BackItem;
