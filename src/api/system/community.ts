import { CommunityListGetResultModel } from './model/communityModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  CommunityList = '/community/getCommunityList',
  // CreateRole = '/role/createNewRole',
  // RemoveRole = '/role/removeRole',
  // UpdateRole = '/role/updateRole',
}

export const getCommunityList = () =>
  defHttp.get<CommunityListGetResultModel>({ url: Api.CommunityList });
