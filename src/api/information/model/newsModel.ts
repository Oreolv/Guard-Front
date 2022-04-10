import { TimeStamp } from '/@/api/model/baseModel';

export interface NewsListItem extends TimeStamp {
  id: number;
  newsId: string;
  publishTime: Date; // 新闻发布时间
  title: String;
  content: String;
  cover: String;
  infoSource: String;
  sourceURL: String;
}

export type GetNewsListResultModel = NewsListItem[];

export type UpdateNewsParams = NewsListItem;

export type CreateNewsParams = Omit<NewsListItem, 'id'>;
