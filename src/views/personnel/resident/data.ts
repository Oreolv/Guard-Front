import { getUserList } from '/@/api/system/user';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { SexEnum, StatusEnum, HealthEnum, VehicleEnum } from '/@/enums/residentEnum';
import { DescItem } from '/@/components/Description/index';
import { getCommunityList } from '/@/api/system/community';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'uname',
  },
  {
    title: '性别',
    dataIndex: 'usex',
    format: (data) => {
      return Number(data) === SexEnum.MALE ? '男' : '女';
    },
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
  {
    field: 'uname',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const ResidentInfoSchema: DescItem[] = [
  {
    field: 'uname',
    label: '姓名',
  },
  {
    field: 'usex',
    label: '性别',
  },
  {
    field: 'uphone',
    label: '手机',
  },
  {
    field: 'cname',
    label: '社区名',
  },
  {
    field: 'vname',
    label: '小区名',
  },
  {
    field: 'bnum',
    label: '楼栋号',
  },
  {
    field: 'hnum',
    label: '单元号',
  },
  {
    field: 'hname',
    label: '门牌号',
  },
  {
    field: 'idCard',
    label: '身份证',
    contentMinWidth: 200,
  },
  {
    field: 'company',
    label: '工作单位',
    contentMinWidth: 200,
  },
  {
    field: 'foreignStatus',
    label: '是否为当地居民',
  },
  {
    field: 'trip',
    label: '是否有异地旅行史',
  },
  {
    field: 'riskStatus',
    label: '是否旅居风险地区',
  },
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
  {
    field: 'healthStatus',
    label: '健康状态',
  },
  {
    field: 'isolationStatus',
    label: '是否被隔离',
  },
  {
    field: 'accessStatus',
    label: '是否限制出入',
  },
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
  {
    field: 'recorder',
    label: '填表人',
  },
  {
    field: 'createTime',
    label: '填表时间',
  },
];

export const ResidentFormSchema: FormSchema[] = [
  {
    field: 'uname',
    label: '姓名',
    required: true,

    component: 'Input',
  },
  {
    field: 'usex',
    label: '性别',
    required: true,

    component: 'Select',
    componentProps: {
      options: [
        {
          label: '男',
          value: SexEnum.MALE,
          key: SexEnum.MALE,
        },
        {
          label: '女',
          value: SexEnum.FEMALE,
          key: SexEnum.FEMALE,
        },
      ],
    },
  },
  {
    field: 'uphone',
    label: '手机',
    required: true,
    component: 'Input',
  },
  {
    field: 'cname',
    label: '社区名',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getCommunityList,
      labelField: 'name',
      valueField: 'name',
    },
  },
  {
    field: 'vname',
    label: '小区名',
    required: true,
    component: 'Input',
  },
  {
    field: 'bnum',
    label: '楼栋号',
    required: true,
    component: 'Input',
  },
  {
    field: 'hnum',
    label: '单元号',
    required: true,
    component: 'Input',
  },
  {
    field: 'hname',
    label: '门牌号',
    required: true,
    component: 'Input',
  },
  {
    field: 'idCard',
    label: '身份证',
    required: true,
    component: 'Input',
  },
  {
    field: 'company',
    label: '工作单位',
    required: true,
    component: 'Input',
  },
  {
    field: 'foreignStatus',
    label: '是否为当地居民',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '是',
          value: StatusEnum.YES,
          key: StatusEnum.YES,
        },
        {
          label: '否',
          value: StatusEnum.NO,
          key: StatusEnum.NO,
        },
      ],
    },
  },
  {
    field: 'riskStatus',
    label: '是否旅居风险地区',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '是',
          value: StatusEnum.YES,
          key: StatusEnum.YES,
        },
        {
          label: '否',
          value: StatusEnum.NO,
          key: StatusEnum.NO,
        },
      ],
    },
  },
  {
    field: 'trip',
    label: '有无异地旅行史',
    required: true,
    component: 'Input',
  },
  {
    field: 'vehicle',
    label: '乘坐交通工具',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '自驾',
          value: VehicleEnum.CAR,
          key: VehicleEnum.CAR,
        },
        {
          label: '大巴',
          value: VehicleEnum.BUS,
          key: VehicleEnum.BUS,
        },
        {
          label: '火车',
          value: VehicleEnum.TRAIN,
          key: VehicleEnum.TRAIN,
        },
        {
          label: '高铁',
          value: VehicleEnum.CHSR,
          key: VehicleEnum.CHSR,
        },
        {
          label: '飞机',
          value: VehicleEnum.PLANE,
          key: VehicleEnum.PLANE,
        },
      ],
    },
    show: (data) => {
      return data.values.trip === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'vehicleNo',
    label: '乘坐车牌/车次/航班号',
    component: 'Input',
    show: (data) => {
      return data.values.trip === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'vehicleSeat',
    label: '乘坐座位号',
    component: 'Input',
    show: (data) => {
      return data.values.trip === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'healthStatus',
    label: '健康状态',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '低风险',
          value: HealthEnum.low,
          key: HealthEnum.low,
        },
        {
          label: '中风险',
          value: HealthEnum.middle,
          key: HealthEnum.middle,
        },
        {
          label: '高风险',
          value: HealthEnum.high,
          key: HealthEnum.high,
        },
      ],
    },
  },
  {
    field: 'isolationStatus',
    label: '是否被隔离',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '是',
          value: StatusEnum.YES,
          key: StatusEnum.YES,
        },
        {
          label: '否',
          value: StatusEnum.NO,
          key: StatusEnum.NO,
        },
      ],
    },
  },
  {
    field: 'isolationStart',
    label: '隔离开始时间',
    component: 'DatePicker',
    show: (data) => {
      return data.values.isolationStatus === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'isolationEnd',
    label: '隔离结束时间',
    component: 'DatePicker',

    show: (data) => {
      return data.values.isolationStatus === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'administrator',
    label: '隔离负责人',
    component: 'ApiSelect',
    componentProps: {
      api: getUserList,
      labelField: 'name',
      valueField: 'id',
    },
    show: (data) => {
      return data.values.isolationStatus === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'accessStatus',
    label: '是否限制出入',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '是',
          value: StatusEnum.YES,
          key: StatusEnum.YES,
        },
        {
          label: '否',
          value: StatusEnum.NO,
          key: StatusEnum.NO,
        },
      ],
    },
  },
  {
    field: 'recorder',
    label: '填表人',
    component: 'Input',
    // 不需要工作人员填写，但是需要来传值。
    show: () => false,
  },
  {
    field: 'createTime',
    label: '填表时间',
    component: 'DatePicker',
    // 不需要工作人员填写，但是需要来传值。
    show: () => false,
  },
];
