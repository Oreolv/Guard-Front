import { defHttp } from '/@/utils/http/axios';
import { GetNoticeListResultModel } from '/@/api/information/model/noticeModel';

enum Api {
  GetNoticeList = '/notice/getNoticeList',
}

export const getNoticeList = (params) =>
  defHttp.get<GetNoticeListResultModel>({ url: Api.GetNoticeList, params });
