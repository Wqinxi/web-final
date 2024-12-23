import axios from "axios";

const request = axios.create({
  baseURL: "http://47.115.57.164:81/api",
  // baseURL: "http://localhost:8080",
  headers: {
  },
});

// 添加请求拦截器
request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['token'] = `${token}`;
  }

  // 对/common开头的接口指向远程服务器
  if (config.url?.startsWith('/common')) {
    config.baseURL = 'http://47.115.57.164:81/api';
  }

  return config;
});

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 直接返回响应的 data 部分
    return response.data;
  },
  (error) => {
    if(error?.response?.data?.message ==='用户已被禁用'){
      localStorage.removeItem('token')
    }
    // 处理错误情况
    return Promise.reject(error);
  }
);

export default request;

