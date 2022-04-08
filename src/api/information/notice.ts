import { defHttp } from '/@/utils/http/axios';
import { GetNoticeListResultModel } from '/@/api/information/model/noticeModel';

enum Api {
  GetNoticeList = '/notice/getNoticeList',
  RemoveNotice = '/notice/removeNotice',
}

export const getNoticeList = (params) =>
  defHttp.get<GetNoticeListResultModel>({ url: Api.GetNoticeList, params });

export const demoveNotice = (id: number) =>
  defHttp.delete<null>(
    {
      url: `${Api.RemoveNotice}?id=${id}`,
    },
    { showSuccessMessage: true },
  );
