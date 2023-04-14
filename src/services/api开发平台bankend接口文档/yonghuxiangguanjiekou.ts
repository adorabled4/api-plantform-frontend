// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 通过用户id获取当前信息 GET /api-core/user/${param0} */
export async function getUserByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseUserVo_>(`/api-core/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 通过ID删除用户 DELETE /api-core/user/${param0} */
export async function deleteUserByIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserByIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api-core/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 添加用户 POST /api-core/user/add */
export async function addUserUsingPOST(body: API.UserVo, options?: { [key: string]: any }) {
  return request<API.BaseResponse>('/api-core/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api-core/user/list */
export async function getUserListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserVo_>('/api-core/user/list', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // pageSize has a default value: 5
      pageSize: '5',
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录 POST /api-core/user/login */
export async function loginUsingPOST(body: API.LoginParam, options?: { [key: string]: any }) {
  return request<API.BaseResponse>('/api-core/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册 POST /api-core/user/register */
export async function registerUsingPOST(body: API.RegisterParam, options?: { [key: string]: any }) {
  return request<API.BaseResponse>('/api-core/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
