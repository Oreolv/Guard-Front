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
    field: 'realName',
    component: 'Input',
    label: '真实姓名',
    colProps: { span: 18 },
  },

  {
    field: 'uphone',
    component: 'Input',
    label: '联系电话',
    colProps: { span: 18 },
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
