import { defHttp } from '/@/utils/http/axios';
import { GetUlogListResultModel, GetRlogListResultModel } from '/@/api/dashboard/model/log';

enum Api {
  GetRlogList = '/log/getRlogList',
  GetUlogList = '/log/getUlogList',
}

export const getRlogList = () => defHttp.get<GetRlogListResultModel>({ url: Api.GetRlogList });

export const getUlogList = () => defHttp.get<GetUlogListResultModel>({ url: Api.GetUlogList });
