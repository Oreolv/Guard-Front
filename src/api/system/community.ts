import {
  CommunityListGetResultModel,
  createCommunityParams,
  UpdateCommunityParams,
} from './model/communityModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommunityList = '/community/getCommunityList',
  createCommunity = '/community/createCommunity',
  RemoveCommunity = '/community/removeCommunity',
  UpdateCommunity = '/Community/updateCommunity',
}

export const getCommunityList = (params) =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList, params });

export const createCommunity = (params: createCommunityParams) =>
  defHttp.post<null>({ url: Api.createCommunity, params });

export const RemoveCommunity = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveCommunity}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const UpdateCommunity = (params: UpdateCommunityParams) =>
  defHttp.put<null>(
    {
      url: Api.UpdateCommunity,
      params,
    },
    { showSuccessMessage: true },
  );
