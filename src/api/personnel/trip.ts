import { defHttp } from '/@/utils/http/axios';
import {
  GetTripListResultModel,
  GetTripDetailResultModel,
  UpdateTripParams,
} from '/@/api/personnel/model/tripModel';

enum Api {
  GetTripList = '/trip/getTripList',
  GetTripDetail = '/trip/getTripDetail',
  UpdateTrip = '/trip/updateTrip',
}

export const getTripList = (params) =>
  defHttp.get<GetTripListResultModel>({ url: Api.GetTripList, params });

export const getTripDetail = (id: number) =>
  defHttp.get<GetTripDetailResultModel>({ url: `${Api.GetTripDetail}?id=${id}` });

export const updateTrip = (params: UpdateTripParams) =>
  defHttp.put<GetTripDetailResultModel>(
    { url: Api.UpdateTrip, params },
    { showSuccessMessage: true },
  );
