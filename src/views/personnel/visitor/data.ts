import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { createImgPreview, ImagePreview } from '/@/components/Preview/index';
import { ApplyStatusEnum } from '/@/enums/personnelEnum';

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

export const VisitorInfoSchema: DescItem[] = [
  {
    field: 'visitor',
    label: '访客姓名',
  },
  {
    field: 'uname',
    label: '申请人',
    render: (_, data) => {
      return data.applicantInfo ? data.applicantInfo.uname : '待审批';
    },
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
    field: 'comeFrom',
    label: '家庭住址',
  },
  {
    field: 'goTo',
    label: '去往地址',
  },
  {
    field: 'foreign',
    label: '来自异地',
    render: (val) => {
      return val ? '是' : '否';
    },
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
