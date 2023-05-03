// @ts-ignore
/* eslint-disable */
import {request} from '@umijs/max';

/** getInterfaceDetail GET /apicore/interface/detail/${param0} */
export async function getInterfaceDetailUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceDetailUsingGETParams,
  options?: { [key: string]: any },
) {
  const {id, ...queryParams} = params;
  // console.log(id) 解析不出来
  // 这里不需要解构，  直接使用params 即可， 因为里面只有一个参数
  // console.log(param0)
  // console.log(params)
  return request<API.BaseResponseInterfaceDetailVo_>(`/apicore/interface/detail/${params}`, {
    method: 'GET',
    params: {...queryParams},
    ...(options || {}),
  });
}

/** getInterfaceExample GET /apicore/interface/example/${param0} */
export async function getInterfaceExampleUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceExampleUsingGETParams,
  options?: { [key: string]: any },
) {
  const {id: param0, ...queryParams} = params;
  return request<API.BaseResponseInterfaceExampleEntity_>(`/apicore/interface/example/${param0}`, {
    method: 'GET',
    params: {...queryParams},
    ...(options || {}),
  });
}

/** invokeInterfaceOL POST /apicore/interface/invoke */
export async function invokeInterfaceOLUsingPOST(
  body: API.InterfaceInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponse>('/apicore/interface/invoke', {
    method: 'POST',
    headers: {
      // 'Content-Type': 'application/json',
      // 'Content-Type': "application/x-www-form-urlencoded"
    },
    data: body,
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

/** getRankInterfaces GET /apicore/interface/list/rank */
export async function getRankInterfacesUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceRankInfoVo_>('/apicore/interface/list/rank', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getInterfaceByTag GET /apicore/interface/list/tag */
export async function getInterfaceByTagUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceTagVo_>('/apicore/interface/list/tag', {
    method: 'GET',
    ...(options || {}),
  });
}
