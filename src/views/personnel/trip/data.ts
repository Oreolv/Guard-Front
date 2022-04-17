import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { ApplyStatusEnum } from '/@/enums/personnelEnum';
import { VehicleEnum } from '/@/enums/residentEnum';

export const columns: BasicColumn[] = [
  {
    title: '去往地区',
    dataIndex: 'destination',
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

export const TripInfoSchema: DescItem[] = [
  {
    field: 'destination',
    label: '去往地区',
  },
  {
    field: 'uname',
    label: '申请人',
    render: (_, data) => {
      return data.applicantInfo.uname;
    },
  },
  {
    field: 'cname',
    label: '所属社区',
  },
  {
    field: 'startTime',
    label: '开始时间',
  },
  {
    field: 'endTime',
    label: '结束时间',
  },
  {
    field: 'vehicle',
    label: '交通工具',
    render: (val) => {
      let text;
      switch (val) {
        case VehicleEnum.CAR:
          text = '自驾';
          break;
        case VehicleEnum.BUS:
          text = '大巴';
          break;
        case VehicleEnum.TRAIN:
          text = '火车';
          break;
        case VehicleEnum.CHSR:
          text = '高铁';
          break;
        case VehicleEnum.PLANE:
          text = '飞机';
          break;
        default:
          text = '未知';
          break;
      }
      return text;
    },
  },
  {
    field: 'vehicleNo',
    label: '车牌/车次号',
  },
  {
    field: 'vehicleSeat',
    label: '座位号',
  },
  {
    field: 'approverInfo',
    label: '审批人',
    render: (_, data) => {
      return data.approverInfo ? data.approverInfo.username : '待审批';
    },
  },
  {
    field: 'approveTime',
    label: '审批时间',
    render: (_, data) => {
      return data.approveTime ? data.approveTime : '待审批';
    },
  },
];
