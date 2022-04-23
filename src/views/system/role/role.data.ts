import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'role_name',
    width: 200,
  },
  {
    title: '角色值',
    dataIndex: 'role_value',
    width: 180,
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
    field: 'role_name',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'role_value',
    label: '角色值',
    required: true,
    component: 'Input',
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];
