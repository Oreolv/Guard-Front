import { CommunityListGetResultModel, CreateNewCommunityParams } from './model/communityModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommunityList = '/community/getCommunityList',
  CreateNewCommunity = '/community/createNewCommunity',
  // RemoveRole = '/role/removeRole',
  // UpdateRole = '/role/updateRole',
}

export const getCommunityList = () =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList });

export const createNewCommunity = (params: CreateNewCommunityParams) =>
  defHttp.post<CreateNewCommunityParams>({ url: Api.CreateNewCommunity, params });
