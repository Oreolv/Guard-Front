import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getRoleList } from '/@/api/system/role';

export const columns: BasicColumn[] = [
  {
    title: '用户名称',
    dataIndex: 'username',
    width: 200,
  },
  {
    title: '真实姓名',
    dataIndex: 'real_name',
    width: 180,
  },
  {
    title: '用户角色',
    dataIndex: 'roles',
    width: 180,
    customRender: ({ record }) => {
      return record.roles.label;
    },
  },
  {
    title: '联系电话',
    dataIndex: 'uphone',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'real_name',
    label: '真实姓名',
    component: 'Input',
    required: true,
  },
  {
    field: 'roles',
    label: '用户角色',
    component: 'ApiSelect',
    componentProps: {
      api: getRoleList,
      labelInValue: true,
      labelField: 'role_name',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '联系电话',
    field: 'uphone',
    component: 'Input',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'role_value',
    label: '用户角色',
    component: 'ApiSelect',
    componentProps: {
      api: getRoleList,
      labelField: 'role_name',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
];
