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

export const getCommunityList = () =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList });

export const createNewCommunity = (params: CreateNewCommunityParams) =>
  defHttp.post<void>({ url: Api.CreateNewCommunity, params });

export const RemoveCommunity = (id: number) =>
  defHttp.delete<void>(
    {
      url: `${Api.RemoveCommunity}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const UpdateCommunity = (params: UpdateCommunityParams) =>
  defHttp.put<void>(
    {
      url: Api.UpdateCommunity,
      params,
    },
    { showSuccessMessage: true },
  );
