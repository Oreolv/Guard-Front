import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getUserList } from '/@/api/system/user';

export const columns: BasicColumn[] = [
  {
    title: '社区名称',
    dataIndex: 'name',
    width: 160,
    align: 'left',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '管理人',
    dataIndex: 'custodian',
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
