import { TimeStamp, BasicFetchResult } from '/@/api/model/baseModel';

export interface TipsListItem extends TimeStamp {
  id: number;
  tipsId: string;
  type: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  sourceURL: string;
  publisher: number;
  publishTime: Date;
}

export type GetTipsListResultModel = BasicFetchResult<TipsListItem>;

export type UpdateTipsParams = TipsListItem;

export type CreateTipsParams = Omit<TipsListItem, 'id'>;
