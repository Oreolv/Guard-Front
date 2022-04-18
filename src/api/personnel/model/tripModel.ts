import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface TripItem extends TimeStamp, BasicApplyResult {
  vehicle: number;
  vehicleNo: string;
  vehicleSeat: string;
}

export interface UpdateTripParams {
  id: number;
  status: number;
  description?: string;
}

export type GetTripListResultModel = TripItem[];
export type GetTripDetailResultModel = TripItem;
