import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { ResultColor } from '/@/enums/colorEnum';
import { getUserList } from '/@/api/system/user';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { SexEnum, StatusEnum, HealthEnum, VehicleEnum } from '/@/enums/residentEnum';
import { DescItem } from '/@/components/Description/index';
import { getCommunityList } from '/@/api/system/community';
import { getVillageList } from '/@/api/system/village';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'uname',
    width: 120,
  },
  {
    title: '性别',
    dataIndex: 'usex',
    width: 50,
    format: (data) => {
      if (data == null) {
        return data;
      }
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
    width: 80,
  },
  {
    title: '身份证',
    dataIndex: 'id_card',
  },
  {
    title: '工作单位',
    dataIndex: 'company',
  },
  {
    title: '是否是当地居民',
    dataIndex: 'foreign_status',
    width: 100,
    customRender: ({ record }) => {
      const color =
        record.foreign_status === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.foreign_status === StatusEnum.NO ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
    filters: [
      {
        text: '是',
        value: String(StatusEnum.YES),
      },
      {
        text: '否',
        value: String(StatusEnum.NO),
      },
    ],
    onFilter: (value: string, record: Recordable) => record.foreign_status == value,
  },
  {
    title: '是否旅居风险地区',
    dataIndex: 'risk_status',
    width: 100,
    customRender: ({ record }) => {
      const color = record.risk_status === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.risk_status === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
    filters: [
      {
        text: '是',
        value: String(StatusEnum.YES),
      },
      {
        text: '否',
        value: String(StatusEnum.NO),
      },
    ],
    onFilter: (value: string, record: Recordable) => record.risk_status == value,
  },
  {
    title: '健康状态',
    dataIndex: 'health_status',
    width: 100,
    customRender: ({ record }) => {
      let color, text;
      switch (record.health_status) {
        case HealthEnum.LOW:
          text = '低风险';
          color = ResultColor.SUCCESS;
          break;
        case HealthEnum.MIDDLE:
          text = '中风险';
          color = ResultColor.WARNING;
          break;
        case HealthEnum.HIGH:
          text = '高风险';
          color = ResultColor.ERROR;
          break;
        default:
          text = '低风险';
          color = ResultColor.SUCCESS;
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
    filters: [
      {
        text: '低风险',
        value: String(HealthEnum.LOW),
      },
      {
        text: '中风险',
        value: String(HealthEnum.MIDDLE),
      },
      {
        text: '高风险',
        value: String(HealthEnum.HIGH),
      },
    ],
    onFilter: (value: string, record: Recordable) => record.health_status == value,
  },
  {
    title: '是否被隔离',
    dataIndex: 'isolation_status',
    width: 110,
    customRender: ({ record }) => {
      const color =
        record.isolation_status === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.isolation_status === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
    filters: [
      {
        text: '是',
        value: String(StatusEnum.YES),
      },
      {
        text: '否',
        value: String(StatusEnum.NO),
      },
    ],
    onFilter: (value: string, record: Recordable) => record.isolation_status == value,
  },
  {
    title: '是否限制出入',
    dataIndex: 'access_status',
    width: 100,
    customRender: ({ record }) => {
      const color =
        record.access_status === StatusEnum.NO ? ResultColor.SUCCESS : ResultColor.ERROR;
      const text = record.access_status === StatusEnum.NO ? '否' : '是';
      return h(Tag, { color: color }, () => text);
    },
    filters: [
      {
        text: '是',
        value: String(StatusEnum.YES),
      },
      {
        text: '否',
        value: String(StatusEnum.NO),
      },
    ],
    onFilter: (value: string, record: Recordable) => record.access_status == value,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'uname',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'uphone',
    label: '手机号',
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
    field: 'id_card',
    label: '身份证',
    contentMinWidth: 200,
  },
  {
    field: 'company',
    label: '工作单位',
    contentMinWidth: 200,
  },
  {
    field: 'foreign_status',
    label: '是否为当地居民',
  },
  {
    field: 'trip',
    label: '是否有异地旅行史',
  },
  {
    field: 'risk_status',
    label: '是否旅居风险地区',
  },
  {
    field: 'vehicle',
    label: '乘坐交通工具',
    show: (data) => (data.trip === '无' ? false : true),
  },
  {
    field: 'vehicle_no',
    label: '乘坐车牌/车次/航班号',
    show: (data) => (data.trip === '无' ? false : true),
  },
  {
    field: 'vehicle_seat',
    label: '乘坐座位号',
    show: (data) => (data.trip === '无' ? false : true),
  },
  {
    field: 'health_status',
    label: '健康状态',
  },
  {
    field: 'isolation_status',
    label: '是否被隔离',
  },
  {
    field: 'access_status',
    label: '是否限制出入',
  },
  {
    field: 'isolation_start',
    label: '隔离开始时间',
    show: (data) => (data.isolation_status === '否' ? false : true),
  },
  {
    field: 'isolation_end',
    label: '隔离结束时间',
    show: (data) => (data.isolation_status === '否' ? false : true),
  },
  {
    field: 'administrator',
    label: '隔离负责人',
    show: (data) => (data.isolation_status === '否' ? false : true),
    render: (_, data) => {
      return data.recorderInfo ? data.recorderInfo.real_name : null;
    },
  },
  {
    field: 'recorder',
    label: '填表人',
    render: (_, data) => {
      return data.recorderInfo.real_name;
    },
  },
  {
    field: 'createdAt',
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
    dynamicRules: () => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)) {
              return Promise.reject('请输入正确的手机号');
            }
            return Promise.resolve();
          },
        },
      ];
    },
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
    component: 'ApiSelect',
    componentProps: {
      api: getVillageList,
      labelField: 'name',
      valueField: 'name',
    },
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
    field: 'id_card',
    label: '身份证',
    component: 'Input',
    dynamicRules: () => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
              return Promise.reject('请输入正确的身份证号码');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    field: 'company',
    label: '工作单位',
    required: true,
    component: 'Input',
  },
  {
    field: 'foreign_status',
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
    field: 'risk_status',
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
      return data.values.trip === '无' ? false : true;
    },
  },
  {
    field: 'vehicle_no',
    label: '乘坐车牌/车次/航班号',
    component: 'Input',
    show: (data) => {
      return data.values.trip === '无' ? false : true;
    },
  },
  {
    field: 'vehicle_seat',
    label: '乘坐座位号',
    component: 'Input',
    show: (data) => {
      return data.values.trip === '无' ? false : true;
    },
  },
  {
    field: 'health_status',
    label: '健康状态',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '低风险',
          value: HealthEnum.LOW,
          key: HealthEnum.LOW,
        },
        {
          label: '中风险',
          value: HealthEnum.MIDDLE,
          key: HealthEnum.MIDDLE,
        },
        {
          label: '高风险',
          value: HealthEnum.HIGH,
          key: HealthEnum.HIGH,
        },
      ],
    },
  },
  {
    field: 'isolation_status',
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
    field: 'isolation_start',
    label: '隔离开始时间',
    component: 'DatePicker',
    show: (data) => {
      return data.values.isolation_status === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'isolation_end',
    label: '隔离结束时间',
    component: 'DatePicker',

    show: (data) => {
      return data.values.isolation_status === StatusEnum.YES ? true : false;
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
      return data.values.isolation_status === StatusEnum.YES ? true : false;
    },
  },
  {
    field: 'access_status',
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
    field: 'createdAt',
    label: '填表时间',
    component: 'DatePicker',
    // 不需要工作人员填写，但是需要来传值。
    show: () => false,
  },
];
