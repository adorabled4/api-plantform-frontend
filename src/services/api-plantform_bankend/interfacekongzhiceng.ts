// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getInterfaceDetail GET /apicore/interface/detail/${param0} */
export async function getInterfaceDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponse>(`/apicore/interface/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getInterfaceExample GET /apicore/interface/example/${param0} */
export async function getInterfaceExampleUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceExampleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseInterfaceExampleEntity_>(`/apicore/interface/example/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getInterfaceList GET /apicore/interface/list */
export async function getInterfaceListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListInterfaceBasicInfoVo_>('/apicore/interface/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
