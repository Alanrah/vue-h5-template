declare interface BaseResponse {
  code: number // 状态码，非0 表示请求有错误
  message: string
}

declare interface BaseDataResponse<T> extends BaseResponse {
  data: T
}
