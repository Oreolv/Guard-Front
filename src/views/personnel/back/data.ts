import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { ApplyStatusEnum } from '/@/enums/personnelEnum';
import { VehicleEnum, HealthEnum as riskStatusEnum } from '/@/enums/residentEnum';
import { createImgPreview, ImagePreview } from '/@/components/Preview/index';

export const columns: BasicColumn[] = [
  {
    title: '出发地区',
    dataIndex: 'comeFrom',
  },
  {
    title: '到达时间',
    dataIndex: 'endTime',
  },
  {
    title: '申请人',
    dataIndex: 'applicant',
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

export const BackInfoSchema: DescItem[] = [
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
    render: (_, data) => {
      return data.applicantInfo.cname;
    },
  },
  {
    field: 'comeFrom',
    label: '出发地区',
  },
  {
    field: 'riskStatus',
    label: '地区风险',
    render: (val) => {
      let text;
      switch (val.status) {
        case riskStatusEnum.low:
          text = '低风险';
          break;
        case riskStatusEnum.middle:
          text = '中风险';
          break;
        case riskStatusEnum.high:
          text = '高风险';
          break;
        default:
          text = '高风险';
          break;
      }
      return text;
    },
  },
  {
    field: 'endTime',
    label: '到达时间',
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
    field: 'healthCode',
    label: '两码截图',
    render: (val) => {
      const imgList = val.split(',');
      return h('div', { id: 'imgPreview' }, [
        h(
          'div',
          {
            onClick: () => {
              createImgPreview({ imageList: imgList, defaultWidth: 700, rememberState: true });
            },
            style: { color: '#0960BD', cursor: 'pointer' },
          },
          '查看图片',
        ),
        h(ImagePreview, {
          imgList: imgList,
        }),
      ]);
    },
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
