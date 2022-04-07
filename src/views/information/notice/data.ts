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
    // customRender: ({ record }) => {
    //   const color = record.riskStatus === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
    //   const text = record.riskStatus === StatusEnum.NO ? '否' : '是';
    //   return h(Tag, { color: color }, () => text);
    // },
  },
  {
    title: '发布人',
    dataIndex: 'publisher',
    width: 120,
  },
  {
    title: '发布时间',
    dataIndex: 'createTime',
    width: 150,
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
  },
  {
    label: '发布人',
    field: 'publisher',
  },
  {
    label: '发布时间',
    field: 'createTime',
  },
];

export const NoticeFormSchema: FormSchema[] = [
  {
    label: '内容',
    field: 'content',
    required: true,
    component: 'InputTextArea',
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
