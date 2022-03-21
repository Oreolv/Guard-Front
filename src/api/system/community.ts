import { CommunityListGetResultModel, CreateNewCommunityParams } from './model/communityModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommunityList = '/community/getCommunityList',
  CreateNewCommunity = '/community/createNewCommunity',
  RemoveCommunity = '/community/removeCommunity',
  // UpdateRole = '/role/updateRole',
}

export const getCommunityList = () =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList });

export const createNewCommunity = (params: CreateNewCommunityParams) =>
  defHttp.post<CreateNewCommunityParams>({ url: Api.CreateNewCommunity, params });

export const RemoveCommunity = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveCommunity}?id=${id}`,
    },
    { showSuccessMessage: true },
  );
