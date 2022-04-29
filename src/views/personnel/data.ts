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

export const transformData = (data) => {
  data.map((r) => {
    for (const i in r) {
      if (r[i] == null) {
        r[i] = '无';
      }
    }
    r.approver = r.approverInfo ? r.approverInfo.real_name : null;
    r.applicant = r.applicantInfo.uname;
    r.uphone = r.applicantInfo.uphone;
    r.status = transformStatus(r.status);
    delete r.id;
    delete r.updatedAt;
    delete r.deletedAt;
    delete r.approverInfo;
    delete r.applicantInfo;
  });
  return data;
};
