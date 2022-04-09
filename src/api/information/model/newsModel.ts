import { TimeStamp } from '/@/api/model/baseModel';

export interface NewsListItem extends TimeStamp {
  id: number;
  publishTime: Date; // 新闻发布时间
  title: String;
  summary: String;
  content: String;
  infoSource: String;
  sourceURL: String;
  province: String;
  provinceId: number;
}

export type GetNewsListResultModel = NewsListItem[];

export type UpdateNewsParams = NewsListItem;

export type CreateNewsParams = Omit<NewsListItem, 'id'>;
