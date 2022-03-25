import { defHttp } from '/@/utils/http/axios';
import { GetResidentListResultModel } from '/@/api/personnel/model/residentModel';

enum Api {
  GetResidentList = '/resident/getResidentList',
}

export const getResidentList = () =>
  defHttp.get<GetResidentListResultModel>({ url: Api.GetResidentList });
