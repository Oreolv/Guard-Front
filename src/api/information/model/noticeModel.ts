import { NoticeEnum } from '/@/enums/informationEnum';
import { TimeStamp } from '/@/api/model/baseModel';
export interface PublisherInfo {
  username: string;
  realName: string;
  avatar: string;
}
export interface NoticeListItem extends TimeStamp {
  id: number;
  content: string;
  grade: NoticeEnum;
  publisher: number;
  PublisherInfo: PublisherInfo;
}

export type GetNoticeListResultModel = NoticeListItem[];

export type UpdateNoticeParams = Omit<NoticeListItem, 'publisherInfo'>;

export type CreateNoticeParams = Omit<NoticeListItem, 'id' | 'publisherInfo'>;
