import { defHttp } from '/@/utils/http/axios';
import { GetVisitorListResultModel } from '/@/api/personnel/model/visitorModel';

enum Api {
  GetVisitorList = '/visitor/getVisitorList',
}

export const getVisitorList = (params) =>
  defHttp.get<GetVisitorListResultModel>({ url: Api.GetVisitorList, params });
