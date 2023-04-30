// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** ipTest GET /apicore/ip */
export async function ipTestUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ipTestUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/apicore/ip', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ipTest PUT /apicore/ip */
export async function ipTestUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ipTestUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/apicore/ip', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ipTest POST /apicore/ip */
export async function ipTestUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ipTestUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/apicore/ip', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ipTest DELETE /apicore/ip */
export async function ipTestUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ipTestUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/apicore/ip', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** ipTest PATCH /apicore/ip */
export async function ipTestUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ipTestUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/apicore/ip', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** weatherTest GET /apicore/weather */
export async function weatherTestUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.weatherTestUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWeatherInfo_>('/apicore/weather', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** weatherTest PUT /apicore/weather */
export async function weatherTestUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.weatherTestUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWeatherInfo_>('/apicore/weather', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** weatherTest POST /apicore/weather */
export async function weatherTestUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.weatherTestUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWeatherInfo_>('/apicore/weather', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** weatherTest DELETE /apicore/weather */
export async function weatherTestUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.weatherTestUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWeatherInfo_>('/apicore/weather', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** weatherTest PATCH /apicore/weather */
export async function weatherTestUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.weatherTestUsingPATCHParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWeatherInfo_>('/apicore/weather', {
    method: 'PATCH',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
