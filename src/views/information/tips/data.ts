import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';
import { h } from 'vue';

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
    dataIndex: 'source',
    width: 100,
  },
  {
    title: '发布人',
    dataIndex: 'publisher',
    width: 100,
    customRender: ({ record }) => {
      return record.publisherInfo.real_name;
    },
  },
  {
    title: '发布时间',
    dataIndex: 'publishTime',
    width: 150,
  },
];

export const TipsInfoSchema: DescItem[] = [
  {
    label: '标题',
    field: 'title',
  },
  {
    label: '内容',
    field: 'content',
    render: (val) => {
      return h('div', {
        innerHTML: val,
      });
    },
  },
  {
    label: '数据来源',
    field: 'source',
  },
  {
    label: '发布人',
    field: 'publisher',
    render: (_, data) => {
      return data.publisherInfo.real_name;
    },
  },
  {
    label: '发布时间',
    field: 'publishTime',
    labelMinWidth: 80,
  },
];

export const TipsFormSchema: FormSchema[] = [
  {
    label: '标题',
    field: 'title',
    required: true,
    component: 'Input',
  },
  {
    label: '摘要',
    field: 'summary',
    required: true,
    component: 'InputTextArea',
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    slot: 'customSlot',
  },
  {
    label: '数据来源',
    field: 'source',
    required: true,
    component: 'Input',
  },
  {
    label: '来源链接',
    field: 'sourceURL',
    required: true,
    component: 'Input',
  },
];
