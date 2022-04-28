import { defHttp } from '/@/utils/http/axios';
import { GetLogListResultModel } from '/@/api/dashboard/model/log';

enum Api {
  GetRlogList = '/log/getRlogList',
  GetUlogList = '/log/getUlogList',
}

export const getRlogList = () => defHttp.get<GetLogListResultModel>({ url: Api.GetRlogList });

export const getUlogList = () => defHttp.get<GetLogListResultModel>({ url: Api.GetUlogList });
