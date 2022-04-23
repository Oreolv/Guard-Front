import { TimeStamp } from '/@/api/model/baseModel';
import { SexEnum, StatusEnum, VehicleEnum, HealthEnum } from '/@/enums/residentEnum';

export interface UserItem {
  id: number;
  name: string;
}

export interface GetResidentListResultModel extends TimeStamp {
  id: number;
  openid: string;
  avatar: string;
  nick_name: string;
  uname: string;
  usex: SexEnum;
  uphone: string;
  cname: string;
  vname: string;
  bnum: string;
  hnum: string;
  hname: string;
  id_card: string;
  company: string;
  foreign_status: StatusEnum;
  trip: string | string[];
  risk_status: StatusEnum;
  vehicle: VehicleEnum;
  vehicle_no: string;
  vehicle_seat: string;
  health_status: HealthEnum;
  isolation_status: StatusEnum;
  access_status: StatusEnum;
  isolation_start: string;
  isolation_end: string;
  administrator: UserItem;
  recorder: UserItem;
}
