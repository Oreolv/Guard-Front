export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface TimeStamp {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface UserInfo {
  username: string;
  real_name: string;
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
  start_time: string;
  end_time: string;
  approve_time: string;
}
