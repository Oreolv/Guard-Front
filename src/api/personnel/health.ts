import { defHttp } from '/@/utils/http/axios';
import {
  GetHealthListResultModel,
  GetHealthDetailResultModel,
  UpdateHealthParams,
} from './model/healthModel';

enum Api {
  GetHealthList = '/health/getHealthList',
  GetHealthDetail = '/health/getHealthDetail',
  UpdateHealth = '/health/updateHealth',
}

export const getHealthList = (params) =>
  defHttp.get<GetHealthListResultModel>({ url: Api.GetHealthList, params });

export const getHealthDetail = (id: number) =>
  defHttp.get<GetHealthDetailResultModel>({ url: `${Api.GetHealthDetail}?id=${id}` });

export const updateHealth = (params: UpdateHealthParams) =>
  defHttp.put<GetHealthDetailResultModel>(
    { url: Api.UpdateHealth, params },
    { showSuccessMessage: true },
  );
