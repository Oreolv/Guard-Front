import { getUserList } from '/@/api/system/user';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { SexEnum, StatusEnum, HealthEnum, VehicleEnum } from '/@/enums/residentEnum';
import { getCommunityList } from '/@/api/system/community';

export const columns: BasicColumn[] = [
  {
    title: '访客姓名',
    dataIndex: 'visitor',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
  },
  {
    title: '申请人',
    dataIndex: 'uname',
    width: 120,
    customRender: ({ record }) => {
      return record.applicantInfo.uname;
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
];
