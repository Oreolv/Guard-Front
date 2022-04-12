import { defHttp } from '/@/utils/http/axios';
import {
  UpdateTipsParams,
  CreateTipsParams,
  GetTipsListResultModel,
} from '/@/api/information/model/tipsModel';

enum Api {
  GetTipsList = '/tips/getTipsList',
  UpdateTips = '/tips/updateTips',
  RemoveTips = '/tips/removeTips',
  CreateTips = '/tips/createTips',
}

export const getTipsList = (params) =>
  defHttp.get<GetTipsListResultModel>({ url: Api.GetTipsList, params });

export const updateTips = (params: UpdateTipsParams) => {
  defHttp.put<null>({ url: Api.UpdateTips, params }, { showSuccessMessage: true });
};

export const removeTips = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveTips}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const createTips = (params: CreateTipsParams) => {
  defHttp.post<null>({ url: Api.CreateTips, params }, { showSuccessMessage: true });
};
