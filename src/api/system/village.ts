import {
  VillageListGetResultModel,
  createVillageParams,
  UpdateVillageParams,
} from './model/villageModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  VillageList = '/village/getVillageList',
  createVillage = '/village/createVillage',
  RemoveVillage = '/village/removeVillage',
  UpdateVillage = '/village/updateVillage',
}

export const getVillageList = (params) =>
  defHttp.get<VillageListGetResultModel>({ url: Api.VillageList, params });

export const createVillage = (params: createVillageParams) =>
  defHttp.post<null>({ url: Api.createVillage, params });

export const RemoveVillage = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveVillage}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const UpdateVillage = (params: UpdateVillageParams) =>
  defHttp.put<null>(
    {
      url: Api.UpdateVillage,
      params,
    },
    { showSuccessMessage: true },
  );
