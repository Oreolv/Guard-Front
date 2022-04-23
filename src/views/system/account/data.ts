import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// tab的list
export const settingList = [
  {
    key: '1',
    name: '基本设置',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: '安全设置',
    component: 'SecureSetting',
  },
];

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'real_name',
    component: 'Input',
    label: '真实姓名',
    colProps: { span: 15 },
  },

  {
    field: 'uphone',
    component: 'Input',
    label: '联系电话',
    colProps: { span: 15 },
    dynamicRules: () => {
      return [
        {
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('手机号码不能为空');
            }
            if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)) {
              return Promise.reject('请输入正确的手机号');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
];

export const passwordSchema: FormSchema[] = [
  {
    field: 'passwordOld',
    label: '当前密码',
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'passwordNew',
    label: '新密码',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: '新密码',
    },
    rules: [
      {
        required: true,
        message: '请输入新密码',
      },
    ],
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: () => {
            if (values.passwordNew === values.passwordOld) {
              return Promise.reject('新密码不能与旧密码相同');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  {
    field: 'confirmPassword',
    label: '确认密码',
    component: 'InputPassword',

    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('确认密码不能为空');
            }
            if (value !== values.passwordNew) {
              return Promise.reject('两次输入的密码不一致!');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
];
