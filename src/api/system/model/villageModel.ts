import { TimeStamp } from '/@/api/model/baseModel';

interface Users {
  id: number;
  username: string;
  real_name: string;
}

interface Community {
  name: string;
  description: string;
}

export interface VillageListItem extends TimeStamp {
  id: number;
  name: string;
  community_id: number;
  grid_id: number;
  description: string;
  users: Users;
  community: Community;
}

export interface createVillageParams {
  name: string;
  description: string;
  community_id: number;
  grid_id: number;
}

export interface UpdateVillageParams {
  id: number;
  name: string;
  description: string;
  community_id: number;
  grid_id: number;
}

export type VillageListGetResultModel = VillageListItem[];
