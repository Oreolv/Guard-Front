import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface TripItem extends TimeStamp, BasicApplyResult {
  vehicle: number;
  vehicle_no: string;
  vehicle_seat: string;
}

export interface UpdateTripParams {
  id: number;
  status: number;
  description?: string;
}

export type GetTripListResultModel = TripItem[];
export type GetTripDetailResultModel = TripItem;
