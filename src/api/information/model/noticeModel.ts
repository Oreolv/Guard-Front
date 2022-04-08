import { NoticeEnum } from '/@/enums/informationEnum';

export interface NoticeListItem {
  id: number;
  content: string;
  grade: NoticeEnum;
  publisher: string;
  createTime: string;
}

export type GetNoticeListResultModel = NoticeListItem[];

export type UpdateNoticeParams = Omit<NoticeListItem, 'createTime'>;

export type CreateNoticeParams = Omit<NoticeListItem, 'id' | 'createTime'>;
