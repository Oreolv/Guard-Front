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
