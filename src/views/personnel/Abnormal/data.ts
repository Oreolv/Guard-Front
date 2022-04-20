import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { StatusEnum } from '/@/enums/residentEnum';
import { ApplyStatusEnum } from '/@/enums/personnelEnum';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'applicant',
    width: 120,
    customRender: ({ record }) => {
      return record.applicantInfo.uname;
    },
  },
  {
    title: '体温',
    dataIndex: 'temperature',
  },
  {
    title: '是否确诊',
    dataIndex: 'diagnosis',
    customRender: ({ record }) => {
      const color = record.diagnosis === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.diagnosis === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否密接',
    dataIndex: 'contact',
    customRender: ({ record }) => {
      const color = record.contact === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.contact === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否有症状',
    dataIndex: 'symptom',
    customRender: ({ record }) => {
      const color = record.symptom === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.symptom === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '前往医院',
    dataIndex: 'hospital',
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
          text = '已通过';
          color = ResultColor.SUCCESS;
          break;
        case ApplyStatusEnum.underReview:
          text = '待审核';
          color = ResultColor.WARNING;
          break;
        case ApplyStatusEnum.reject:
          text = '已拒绝';
          color = ResultColor.ERROR;
          break;
        default:
          text = '已通过';
          color = ResultColor.SUCCESS;
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
];
