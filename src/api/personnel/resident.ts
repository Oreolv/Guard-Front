import { defHttp } from '/@/utils/http/axios';
import {
  GetResidentListResultModel,
  GetResidentListResultModel as UpdateResidentInfoParams,
} from '/@/api/personnel/model/residentModel';

enum Api {
  GetResidentList = '/resident/getResidentList',
  UpdateResidentInfo = '/resident/updateResidentInfo',
}

export const getResidentList = () =>
  defHttp.get<GetResidentListResultModel>({ url: Api.GetResidentList });

export const updateResidentInfo = (params: UpdateResidentInfoParams) => {
  defHttp.put<null>({ url: Api.UpdateResidentInfo, params }, { showSuccessMessage: true });
};
