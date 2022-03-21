import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getUserList } from '/@/api/system/user';

export const columns: BasicColumn[] = [
  {
    title: '用户名称',
    dataIndex: 'username',
    width: 200,
  },
  {
    title: '真实姓名',
    dataIndex: 'realName',
    width: 180,
  },
  {
    title: '用户角色',
    dataIndex: 'roleName',
    width: 180,
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
    field: 'custodian',
    label: '管理人',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      labelField: 'username',
      valueField: 'userId',
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
    field: 'username',
    label: '用户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'roleName',
    label: '用户角色',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      labelField: 'username',
      valueField: 'userId',
    },
    colProps: { span: 8 },
  },
];
