import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { ApplyStatusEnum } from '/@/enums/personnelEnum';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'applicant',
    width: 100,
    customRender: ({ record }) => {
      return record.applicantInfo.uname;
    },
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '审批人',
    dataIndex: 'uname',
    width: 120,
    customRender: ({ record }) => {
      return record.approverInfo ? record.approverInfo.username : '待审批';
    },
  },
  {
    title: '审批结果',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      let color, text;
      switch (record.status) {
        case ApplyStatusEnum.approval:
          text = '已回复';
          color = ResultColor.SUCCESS;
          break;
        case ApplyStatusEnum.underReview:
          text = '待回复';
          color = ResultColor.WARNING;
          break;
        default:
          text = '已回复';
          color = ResultColor.SUCCESS;
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
];
