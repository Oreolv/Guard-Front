import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { StatusEnum } from '/@/enums/residentEnum';
import { ApplyStatusEnum, HospitalEnum } from '/@/enums/personnelEnum';

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
    width: 80,
    customRender: ({ record }) => {
      const color = record.diagnosis === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.diagnosis === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否密接',
    dataIndex: 'contact',
    width: 80,
    customRender: ({ record }) => {
      const color = record.contact === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.contact === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否有疑似症状',
    dataIndex: 'symptom',
    width: 150,
    customRender: ({ record }) => {
      const color = record.symptom === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.symptom === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '是否前往医院',
    dataIndex: 'hospital',
    width: 120,
    customRender: ({ record }) => {
      return HospitalEnum[record.hospital];
    },
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
