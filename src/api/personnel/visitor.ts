import { defHttp } from '/@/utils/http/axios';
import {
  GetVisitorListResultModel,
  GetVisitorDetailResultModel,
} from '/@/api/personnel/model/visitorModel';

enum Api {
  GetVisitorList = '/visitor/getVisitorList',
  GetVisitorDetail = '/visitor/getVisitorDetail',
}

export const getVisitorList = (params) =>
  defHttp.get<GetVisitorListResultModel>({ url: Api.GetVisitorList, params });

export const getVisitorDetail = (id: number) =>
  defHttp.get<GetVisitorDetailResultModel>({ url: `${Api.GetVisitorDetail}?id=${id}` });
