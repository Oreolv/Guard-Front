import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '数据来源',
    dataIndex: 'infoSource',
    width: 80,
  },
  {
    title: '来源链接',
    dataIndex: 'sourceURL',
    width: 80,
  },
  {
    title: '发布时间',
    dataIndex: 'publishTime',
    width: 150,
  },
];

export const NewsInfoSchema: DescItem[] = [
  {
    label: '标题',
    field: 'title',
  },
  {
    label: '内容',
    field: 'content',
  },
  {
    label: '数据来源',
    field: 'infoSource',
  },
  {
    label: '来源链接',
    field: 'sourceURL',
  },
  {
    label: '发布时间',
    field: 'publishTime',
  },
];

export const NewsFormSchema: FormSchema[] = [
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
];
