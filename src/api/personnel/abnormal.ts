import { defHttp } from '/@/utils/http/axios';
import {
  GetAbnormalListResultModel,
  GetAbnormalDetailResultModel,
  UpdateAbnormalParams,
} from '/@/api/personnel/model/abnormalModel';

enum Api {
  GetAbnormalList = '/abnormal/getAbnormalList',
  GetAbnormalDetail = '/abnormal/getAbnormalDetail',
  UpdateAbnormal = '/abnormal/updateAbnormal',
}

export const getAbnormalList = (params) =>
  defHttp.get<GetAbnormalListResultModel>({ url: Api.GetAbnormalList, params });

export const getAbnormalDetail = (id: number) =>
  defHttp.get<GetAbnormalDetailResultModel>({ url: `${Api.GetAbnormalDetail}?id=${id}` });

export const updateAbnormal = (params: UpdateAbnormalParams) =>
  defHttp.put<GetAbnormalDetailResultModel>(
    { url: Api.UpdateAbnormal, params },
    { showSuccessMessage: true },
  );
