import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '摘要',
    dataIndex: 'summary',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '数据来源',
    dataIndex: 'infoSource',
  },
  {
    title: '来源链接',
    dataIndex: 'sourceURL',
  },
  {
    title: '省市名称',
    dataIndex: 'province',
  },
  {
    title: '发布人',
    dataIndex: 'publisher',
  },
  {
    title: '发布时间',
    dataIndex: 'publishTime',
  },
];

export const NewsInfoSchema: DescItem[] = [
  {
    label: '标题',
    field: 'title',
  },
  {
    label: '摘要',
    field: 'summary',
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
    label: '省市名称',
    field: 'province',
  },
  {
    label: '发布人',
    field: 'publisher',
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
