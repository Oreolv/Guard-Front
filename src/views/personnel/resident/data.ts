import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'uname',
  },
  {
    title: '性别',
    dataIndex: 'usex',
  },
  {
    title: '手机',
    dataIndex: 'uphone',
  },
  {
    title: '社区名',
    dataIndex: 'cname',
  },
  {
    title: '小区名',
    dataIndex: 'vname',
  },
  {
    title: '楼栋号',
    dataIndex: 'bnum',
  },
  {
    title: '单元号',
    dataIndex: 'hnum',
  },
  {
    title: '门牌号',
    dataIndex: 'hname',
  },
  {
    title: '身份证',
    dataIndex: 'idCard',
  },
];

export const searchFormSchema: FormSchema[] = [
  { field: 'uname', label: '姓名', component: 'Input', colProps: { span: 8 } },
];

export const ResidentInfoSchema: DescItem[] = [
  { field: 'uname', label: '姓名' },
  { field: 'usex', label: '性别' },
  { field: 'uphone', label: '手机' },
  { field: 'cname', label: '社区名' },
  { field: 'vname', label: '小区名' },
  { field: 'bnum', label: '楼栋号' },
  { field: 'hnum', label: '单元号' },
  { field: 'hname', label: '门牌号' },
  { field: 'idCard', label: '身份证' },
  { field: 'company', label: '工作单位' },
  { field: 'foreignStatus', label: '是否为当地居民' },
  { field: 'trip', label: '是否有异地旅行史' },
  { field: 'riskStatus', label: '是否旅居风险地区' },
  {
    field: 'vehicle',
    label: '乘坐交通工具',
    show: (data) => (data.trip === '无' ? false : true),
  },
  {
    field: 'vehicleNo',
    label: '乘坐车牌/车次/航班号',
    show: (data) => (data.trip === '无' ? false : true),
  },
  {
    field: 'vehicleSeat',
    label: '乘坐座位号',
    show: (data) => (data.trip === '无' ? false : true),
  },
  { field: 'healthStatus', label: '健康状态' },
  { field: 'isolationStatus', label: '是否被隔离' },
  { field: 'accessStatus', label: '是否限制出入' },
  {
    field: 'isolationStart',
    label: '隔离开始时间',
    show: (data) => (data.isolationStatus === '否' ? false : true),
  },
  {
    field: 'isolationEnd',
    label: '隔离结束时间',
    show: (data) => (data.isolationStatus === '否' ? false : true),
  },
  {
    field: 'administrator',
    label: '隔离负责人',
    show: (data) => (data.isolationStatus === '否' ? false : true),
  },
  { field: 'recorder', label: '填表人' },
  { field: 'createTime', label: '填表时间' },
];
