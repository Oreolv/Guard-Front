import { defHttp } from '/@/utils/http/axios';
import {
  GetMaterialListResultModel,
  GetMaterialDetailResultModel,
  UpdateMaterialParams,
} from '/@/api/personnel/model/materialModel';

enum Api {
  GetMaterialList = '/material/getMaterialList',
  GetMaterialDetail = '/material/getMaterialDetail',
  UpdateMaterial = '/material/updateMaterial',
}

export const getMaterialList = (params) =>
  defHttp.get<GetMaterialListResultModel>({ url: Api.GetMaterialList, params });

export const getMaterialDetail = (id: number) =>
  defHttp.get<GetMaterialDetailResultModel>({ url: `${Api.GetMaterialDetail}?id=${id}` });

export const updateMaterial = (params: UpdateMaterialParams) =>
  defHttp.put<GetMaterialDetailResultModel>(
    { url: Api.UpdateMaterial, params },
    { showSuccessMessage: true },
  );
