import axios from 'axios';
import { AXIOS_BASE_URL } from '@/utils/const';
import { Toast } from 'vant';
import { getCookie } from '@/utils/cookie';

export const request = axios.create({
    timeout: 20 * 1000,
    withCredentials: true,
    baseURL: AXIOS_BASE_URL,
    headers: {
        Authorization: getCookie('authorization')
    }
});
request.interceptors.response.use(res => {
    const data = res.data;
  if (data.code === 401) {
        Toast('未登录，请重新登录');
  }
    return data;
})
