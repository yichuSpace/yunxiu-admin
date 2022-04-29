import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin' // 基础路径
});

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  }
);

export default service;
