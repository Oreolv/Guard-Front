import { defHttp } from '/@/utils/http/axios';
import {
  GetAgencyListResultModel,
  GetAgencyDetailResultModel,
  UpdateAgencyParams,
} from '/@/api/personnel/model/agencyModel';

enum Api {
  GetAgencyList = '/agency/getAgencyList',
  GetAgencyDetail = '/agency/getAgencyDetail',
  UpdateAgency = '/agency/updateAgency',
}

export const getAgencyList = (params) =>
  defHttp.get<GetAgencyListResultModel>({ url: Api.GetAgencyList, params });

export const getAgencyDetail = (id: number) =>
  defHttp.get<GetAgencyDetailResultModel>({ url: `${Api.GetAgencyDetail}?id=${id}` });

export const updateAgency = (params: UpdateAgencyParams) =>
  defHttp.put<GetAgencyDetailResultModel>(
    { url: Api.UpdateAgency, params },
    { showSuccessMessage: true },
  );
