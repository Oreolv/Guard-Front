import { defHttp } from '/@/utils/http/axios';
import {
  GetVisitorListResultModel,
  GetVisitorDetailResultModel,
  UpdateVisitorParams,
} from '/@/api/personnel/model/visitorModel';

enum Api {
  GetVisitorList = '/visitor/getVisitorList',
  GetVisitorDetail = '/visitor/getVisitorDetail',
  UpdateVisitor = '/visitor/updateVisitor',
}

export const getVisitorList = (params) =>
  defHttp.get<GetVisitorListResultModel>({ url: Api.GetVisitorList, params });

export const getVisitorDetail = (id: number) =>
  defHttp.get<GetVisitorDetailResultModel>({ url: `${Api.GetVisitorDetail}?id=${id}` });

export const updateVisitor = (params: UpdateVisitorParams) =>
  defHttp.put<GetVisitorDetailResultModel>(
    { url: Api.UpdateVisitor, params },
    { showSuccessMessage: true },
  );
