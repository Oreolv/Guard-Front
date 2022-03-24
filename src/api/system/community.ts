import {
  CommunityListGetResultModel,
  CreateNewCommunityParams,
  UpdateCommunityParams,
} from './model/communityModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommunityList = '/community/getCommunityList',
  CreateNewCommunity = '/community/createNewCommunity',
  RemoveCommunity = '/community/removeCommunity',
  UpdateCommunity = '/Community/updateCommunity',
}

export const getCommunityList = (params) =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList, params });

export const createNewCommunity = (params: CreateNewCommunityParams) =>
  defHttp.post<null>({ url: Api.CreateNewCommunity, params });

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
