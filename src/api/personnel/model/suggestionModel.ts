import { TimeStamp, BasicApplyResult } from '/@/api/model/baseModel';

export interface SuggestionItem extends TimeStamp, BasicApplyResult {
  type: string;
  content: string;
}

export interface UpdateSuggestionParams {
  id: number;
  status: number;
  description?: string;
}

export type GetSuggestionListResultModel = SuggestionItem[];
export type GetSuggestionDetailResultModel = SuggestionItem;
