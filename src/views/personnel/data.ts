import { ApplyStatusEnum } from '/@/enums/personnelEnum';

export const transformStatus = (status) => {
  let text;
  switch (status) {
    case ApplyStatusEnum.approval:
      text = '已通过';
      break;
    case ApplyStatusEnum.reject:
      text = '已拒绝';
      break;
    case ApplyStatusEnum.underReview:
      text = '待审批';
      break;
  }
  return text;
};

export const transformForegin = (status) => {
  return status ? '是' : '否';
};
