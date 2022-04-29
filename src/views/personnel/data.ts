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

export const vehicleColumns = ['驾车', '大巴', '火车', '高铁', '飞机'];

export const riskStatusColumns = ['低风险', '中风险', , '高风险'];

export const sexEnums = ['男', '女'];

export const transformResidentData = (data) => {
  data.map((i) => {
    delete i.openid;
    delete i.avatar;
    delete i.id;
    delete i.createdAt;
    delete i.updatedAt;
    delete i.deletedAt;
    for (const idx in i) {
      if (i[idx] == null || i[idx] === '') {
        i[idx] = '无';
      }
    }
    i.usex = sexEnums[i.usex];
    i.foreign_status = transformForegin(i.foreign_status);
    i.risk_status = transformForegin(i.risk_status);
    i.vehicle = vehicleColumns[i.vehicle];
    i.health_status = riskStatusColumns[i.health_status];
    i.isolation_status = transformForegin(i.isolation_status);
    i.access_status = transformForegin(i.isolation_status);
  });
  return data;
};
