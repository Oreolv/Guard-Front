import { defHttp } from '/@/utils/http/axios';
import {
  UpdateNoticeParams,
  CreateNoticeParams,
  GetNoticeListResultModel,
} from '/@/api/information/model/noticeModel';

enum Api {
  GetNoticeList = '/notice/getNoticeList',
  UpdateNotice = '/notice/updateNotice',
  RemoveNotice = '/notice/removeNotice',
  CreateNotice = '/notice/createNotice',
}

export const getNoticeList = (params) =>
  defHttp.get<GetNoticeListResultModel>({ url: Api.GetNoticeList, params });

export const updateNotice = (params: UpdateNoticeParams) => {
  defHttp.put<null>({ url: Api.UpdateNotice, params }, { showSuccessMessage: true });
};

export const demoveNotice = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveNotice}?id=${id}`,
    },
    { showSuccessMessage: true },
  );

export const createNotice = (params: CreateNoticeParams) => {
  defHttp.post<null>({ url: Api.CreateNotice, params }, { showSuccessMessage: true });
};
