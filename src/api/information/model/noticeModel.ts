import { NoticeEnum } from '/@/enums/informationEnum';
import { TimeStamp, UserInfo } from '/@/api/model/baseModel';

export interface NoticeListItem extends TimeStamp {
  id: number;
  content: string;
  grade: NoticeEnum;
  publisher: number;
  PublisherInfo: UserInfo;
}

export type GetNoticeListResultModel = NoticeListItem[];

export type UpdateNoticeParams = Omit<NoticeListItem, 'publisherInfo'>;

export type CreateNoticeParams = Omit<NoticeListItem, 'id' | 'publisherInfo'>;
