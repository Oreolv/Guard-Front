import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';
import { NoticeEnum } from '/@/enums/informationEnum';

export const columns: BasicColumn[] = [
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '重要等级',
    dataIndex: 'grade',
    width: 80,
    customRender: ({ record }) => {
      let color, text;
      switch (record.grade) {
        case NoticeEnum.LOW:
          text = '较低';
          color = ResultColor.SUCCESS;
          break;
        case NoticeEnum.MIDDLE:
          text = '重要';
          color = ResultColor.WARNING;
          break;
        case NoticeEnum.HIGH:
          text = '紧急';
          color = ResultColor.ERROR;
          break;
        default:
          text = '较低';
          color = ResultColor.SUCCESS;
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '发布人',
    dataIndex: 'publisher',
    width: 120,
    customRender: ({ record }) => {
      return record.publisherInfo.real_name;
    },
  },
  {
    title: '发布时间',
    dataIndex: 'createdAt',
    width: 180,
  },
];

export const NoticeInfoSchema: DescItem[] = [
  {
    label: '内容',
    field: 'content',
  },
  {
    label: '重要等级',
    field: 'grade',
    labelMinWidth: 120,
    render: (val) => {
      let color, text;
      switch (val) {
        case NoticeEnum.LOW:
          text = '较低';
          color = ResultColor.SUCCESS;
          break;
        case NoticeEnum.MIDDLE:
          text = '重要';
          color = ResultColor.WARNING;
          break;
        case NoticeEnum.HIGH:
          text = '紧急';
          color = ResultColor.ERROR;
          break;
        default:
          text = '较低';
          color = ResultColor.SUCCESS;
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    label: '发布人',
    field: 'publisher',
    labelMinWidth: 120,
    render: (_, data) => {
      return data.publisherInfo.real_name;
    },
  },
  {
    label: '发布时间',
    field: 'createdAt',
    labelMinWidth: 120,
  },
];

export const NoticeFormSchema: FormSchema[] = [
  {
    label: '内容',
    field: 'content',
    required: true,
    component: 'InputTextArea',
    componentProps: {
      allowClear: false,
      autoSize: { minRows: 4, maxRows: 6 },
    },
  },
  {
    label: '重要等级',
    field: 'grade',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '较低',
          value: NoticeEnum.LOW,
          key: NoticeEnum.LOW,
        },
        {
          label: '重要',
          value: NoticeEnum.MIDDLE,
          key: NoticeEnum.MIDDLE,
        },
        {
          label: '紧急',
          value: NoticeEnum.HIGH,
          key: NoticeEnum.HIGH,
        },
      ],
    },
  },
];
