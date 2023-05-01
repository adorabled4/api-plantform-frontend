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

  type BaseResponseInterfaceDetailVo_ = {
    code?: number;
    data?: InterfaceDetailVo;
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

  type BaseResponseListInterfaceRankInfoVo_ = {
    code?: number;
    data?: InterfaceRankInfoVo[];
    description?: string;
    message?: string;
  };

  type BaseResponseListInterfaceTagVo_ = {
    code?: number;
    data?: InterfaceTagVo[];
    description?: string;
    message?: string;
  };

  type BaseResponseListUserVo_ = {
    code?: number;
    data?: UserVo[];
    description?: string;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
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

  type BaseResponseWeatherInfo_ = {
    code?: number;
    data?: WeatherInfo;
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
    background?: string;
    callTimes?: number;
    createTime?: string;
    description?: string;
    id?: number;
    isFree?: number;
    method?: string;
    name?: string;
    tag?: string;
    url?: string;
    userName?: string;
  };

  type InterfaceDetailVo = {
    background?: string;
    callTimes?: number;
    createTime?: string;
    description?: string;
    id?: number;
    isFree?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParam?: string;
    responseHeader?: string;
    tag?: string;
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

  type InterfaceInfoRequest = {
    interfaceId?: number;
    params?: Record<string, any>;
  };

  type InterfaceRankInfoVo = {
    background?: string;
    callTimes?: number;
    description?: string;
    id?: number;
    isFree?: number;
    method?: string;
    name?: string;
    tag?: string;
    url?: string;
  };

  type InterfaceTagVo = {
    interfaceBasicInfoVos?: InterfaceBasicInfoVo[];
    tag?: string;
  };

  type ipTestUsingDELETEParams = {
    /** ip */
    ip?: string;
  };

  type ipTestUsingGETParams = {
    /** ip */
    ip?: string;
  };

  type ipTestUsingPATCHParams = {
    /** ip */
    ip?: string;
  };

  type ipTestUsingPOSTParams = {
    /** ip */
    ip?: string;
  };

  type ipTestUsingPUTParams = {
    /** ip */
    ip?: string;
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

  type WeatherInfo = {
    adcode?: string;
    city?: string;
    humidity?: string;
    humidity_float?: number;
    province?: string;
    reporttime?: string;
    temperature?: string;
    temperature_float?: number;
    weather?: string;
    winddirection?: string;
    windpower?: string;
  };

  type weatherTestUsingDELETEParams = {
    /** cityName */
    cityName?: string;
  };

  type weatherTestUsingGETParams = {
    /** cityName */
    cityName?: string;
  };

  type weatherTestUsingPATCHParams = {
    /** cityName */
    cityName?: string;
  };

  type weatherTestUsingPOSTParams = {
    /** cityName */
    cityName?: string;
  };

  type weatherTestUsingPUTParams = {
    /** cityName */
    cityName?: string;
  };
}
