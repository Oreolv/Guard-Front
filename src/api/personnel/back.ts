import { defHttp } from '/@/utils/http/axios';
import {
  GetBackListResultModel,
  GetBackDetailResultModel,
  UpdateBackParams,
} from '/@/api/personnel/model/backModel';

enum Api {
  GetBackList = '/back/getBackList',
  GetBackDetail = '/back/getBackDetail',
  UpdateBack = '/back/updateBack',
}

export const getBackList = (params) =>
  defHttp.get<GetBackListResultModel>({ url: Api.GetBackList, params });

export const getBackDetail = (id: number) =>
  defHttp.get<GetBackDetailResultModel>({ url: `${Api.GetBackDetail}?id=${id}` });

export const updateBack = (params: UpdateBackParams) =>
  defHttp.put<GetBackDetailResultModel>(
    { url: Api.UpdateBack, params },
    { showSuccessMessage: true },
  );
