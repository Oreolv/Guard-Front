import { NoticeEnum } from '/@/enums/informationEnum';

export interface GetNoticeListResultModel {
  id: number;
  content: string;
  grade: NoticeEnum;
  publisher: string;
  createTime: string;
}
