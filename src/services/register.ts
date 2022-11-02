import { request } from './axios';

export async function submitRegister (params: {
  nickname: string // 用户真实姓名
  mobile: string // 手机号
  captcha: string // 手机验证码
}) {
    const res = await request.post<any, BaseDataResponse<any>>('/api/1.0/auth/register', params);
    return res;
}

export async function getCaptcha (params: { type: string, mobile: string }) {
    const res = await request.post<any, BaseDataResponse<number>>('/api/1.0/auth/send-captcha', params);
    return res;
}
