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
    dataIndex: 'infoSource',
    width: 80,
    customRender: ({ record }) => {
      return record.mediaInfo.name;
    },
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
    render: (val) => {
      return h('div', {
        innerHTML: val,
      });
    },
  },
  {
    label: '数据来源',
    field: 'infoSource',
    render: (_, data) => {
      return data.mediaInfo.name;
    },
  },
  {
    label: '来源链接',
    field: 'sourceURL',
  },
  {
    label: '发布时间',
    field: 'publishTime',
    labelMinWidth: 80,
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
