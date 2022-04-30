import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getUserList } from '/@/api/system/user';

export const columns: BasicColumn[] = [
  {
    title: '小区名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '管理人',
    dataIndex: 'custodian',
    customRender: ({ record }) => {
      return record.user.username;
    },
  },
  {
    title: '所属社区',
    dataIndex: 'community',
    customRender: ({ record }) => {
      return record.community.name;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'description',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '社区名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'custodians',
    label: '管理人',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      params: { withGrid: true },
      mode: 'multiple',
      showArrow: true,
      labelInValue: true,
      labelField: 'real_name',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '社区名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'custodian',
    label: '管理人',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      params: { withGrid: true },
      labelInValue: true,
      labelField: 'real_name',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
];
