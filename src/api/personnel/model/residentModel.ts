import { SexEnum, StatusEnum, VehicleEnum, HealthEnum } from '/@/enums/residentEnum';

export interface UserItem {
  id: number;
  name: string;
}

export interface GetResidentListResultModel {
  id: number;
  openid: string;
  avatar: string;
  nickName: string;
  uname: string;
  usex: SexEnum;
  uphone: string;
  cname: string;
  vname: string;
  bnum: string;
  hnum: string;
  hname: string;
  idCard: string;
  company: string;
  foreignStatus: StatusEnum;
  trip: string | string[];
  riskStatus: StatusEnum;
  vehicle: VehicleEnum;
  vehicleNo: string;
  vehicleSeat: string;
  healthStatus: HealthEnum;
  isolationStatus: StatusEnum;
  accessStatus: StatusEnum;
  isolationStart: string;
  isolationEnd: string;
  administrator: UserItem;
  recorder: UserItem;
  createTime: string;
}
