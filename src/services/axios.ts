import axios from 'axios';
import qs from 'qs';

export const request = axios.create({
    timeout: 10 * 1000,
    withCredentials: true,
    baseURL: '/',
    transformRequest(data) {
        return qs.stringify(data);
    },
});
request.interceptors.response.use(res => {
    const data = res.data;
    if (data && +data.result === 0) {
        return data;
    }
    throw data;
});
