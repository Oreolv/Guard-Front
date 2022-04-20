import { defHttp } from '/@/utils/http/axios';
import {
  GetSuggestionListResultModel,
  GetSuggestionDetailResultModel,
  UpdateSuggestionParams,
} from '/@/api/personnel/model/suggestionModel';

enum Api {
  GetSuggestionList = '/suggestion/getSuggestionList',
  GetSuggestionDetail = '/suggestion/getSuggestionDetail',
  UpdateSuggestion = '/suggestion/updateSuggestion',
}

export const getSuggestionList = (params) =>
  defHttp.get<GetSuggestionListResultModel>({ url: Api.GetSuggestionList, params });

export const getSuggestionDetail = (id: number) =>
  defHttp.get<GetSuggestionDetailResultModel>({ url: `${Api.GetSuggestionDetail}?id=${id}` });

export const updateSuggestion = (params: UpdateSuggestionParams) =>
  defHttp.put<GetSuggestionDetailResultModel>(
    { url: Api.UpdateSuggestion, params },
    { showSuccessMessage: true },
  );
