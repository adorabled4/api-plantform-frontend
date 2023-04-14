declare namespace API {
  type BaseResponse = {
    code?: number;
    data?: Record<string, any>;
    description?: string;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    description?: string;
    message?: string;
  };

  type BaseResponseInterfaceExampleEntity_ = {
    code?: number;
    data?: InterfaceExampleEntity;
    description?: string;
    message?: string;
  };

  type BaseResponseListInterfaceBasicInfoVo_ = {
    code?: number;
    data?: InterfaceBasicInfoVo[];
    description?: string;
    message?: string;
  };

  type BaseResponseListUserVo_ = {
    code?: number;
    data?: UserVo[];
    description?: string;
    message?: string;
  };

  type BaseResponseUserDTO_ = {
    code?: number;
    data?: UserDTO;
    description?: string;
    message?: string;
  };

  type BaseResponseUserVo_ = {
    code?: number;
    data?: UserVo;
    description?: string;
    message?: string;
  };

  type deleteUserByIdUsingDELETEParams = {
    /** id */
    id: number;
  };

  type getInterfaceDetailUsingGETParams = {
    /** id */
    id: number;
  };

  type getInterfaceExampleUsingGETParams = {
    /** id */
    id: number;
  };

  type getInterfaceListUsingGETParams = {
    /** current */
    current: number;
    /** pageSize */
    pageSize: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getUserListUsingGETParams = {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  };

  type InterfaceBasicInfoVo = {
    createTime?: string;
    description?: string;
    id?: number;
    isFree?: number;
    method?: string;
    name?: string;
    url?: string;
    userName?: string;
  };

  type InterfaceExampleEntity = {
    callExample?: string;
    createTime?: string;
    id?: number;
    interfaceId?: number;
    isDelete?: number;
    returnExample?: string;
    updateTime?: string;
  };

  type LoginParam = {
    password?: string;
    userName?: string;
  };

  type RegisterParam = {
    checkPassword?: string;
    password?: string;
    userName?: string;
  };

  type UserDTO = {
    avatarUrl?: string;
    userId?: number;
    userName?: string;
  };

  type UserVo = {
    avatarUrl?: string;
    birthday?: string;
    createTime?: string;
    email?: string;
    gender?: number;
    phone?: string;
    userAccount?: string;
    userId?: number;
    userName?: string;
  };
}
