import { TimeStamp, UserInfo, ResidentInfo } from '/@/api/model/baseModel';

export interface TripItem extends TimeStamp {
  id: number;
  status: number;
  approver: number;
  applicant: number;
  approverInfo: UserInfo;
  applicantInfo: ResidentInfo;
  description: string;
  startTime: string;
  endTime: string;
  approveTime: string;
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
