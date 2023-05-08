import axios from 'axios';
import type { AxiosResponse } from 'axios';
import BASE_URL from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000
});

instance.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
instance.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token');

  const newConfig = {
    ...config,
    params: config.params || {}
  };
  return newConfig;
});

// 响应拦截

instance.interceptors.response.use((res: AxiosResponse): Promise<AxiosResponse> => {
  if (res.status >= 200 && res.status < 300) return Promise.resolve(res.data);
  if (res.status !== 200) return Promise.reject(res);
  return Promise.resolve(res);
});

export default instance;
