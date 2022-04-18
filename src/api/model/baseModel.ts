export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface TimeStamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface UserInfo {
  username: string;
  realName: string;
  avatar: string;
}

export interface ResidentInfo {
  uname: string;
  uphone: string;
  cname: string;
}

export interface BasicApplyResult {
  id: number;
  status: number;
  approver: number;
  applicant: number;
  approverInfo: UserInfo;
  applicantInfo: ResidentInfo;
  description: string;
  startTime: string;
  endTime: string;
  approveTime: string;
}
