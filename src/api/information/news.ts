import { defHttp } from '/@/utils/http/axios';
import {
  UpdateNewsParams,
  CreateNewsParams,
  GetNewsListResultModel,
} from '/@/api/information/model/newsModel';

enum Api {
  GetNewsList = '/news/getNewsList',
  UpdateNews = '/news/updateNews',
  RemoveNews = '/news/removeNews',
  CreateNews = '/news/createNews',
}

export const getNewsList = (params) =>
  defHttp.get<GetNewsListResultModel>({ url: Api.GetNewsList, params });

export const updateNews = (params: UpdateNewsParams) => {
  defHttp.put<null>({ url: Api.UpdateNews, params }, { showSuccessMessage: true });
};

export const demoveNews = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveNews}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const createNews = (params: CreateNewsParams) => {
  defHttp.post<null>({ url: Api.CreateNews, params }, { showSuccessMessage: true });
};
