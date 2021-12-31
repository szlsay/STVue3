import axios, { AxiosRequestConfig } from "axios";
import { Toast } from "vant";

interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}
const MODE = import.meta.env.MODE;
console.log("Mode:", MODE);

const service = axios.create({
  baseURL: MODE === "development" ? "/api" : "http://ab.svip52.com/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

const request = async (
  config: AxiosRequestConfig
): Promise<ResponseData<any>> => {
  service.interceptors.request.use((config) => {
    if (config.headers) {
      config.headers.Authorization = localStorage.getItem("token") || "";
    }
    return config;
  });

  const { data } = await service.request<ResponseData>(config);
  console.log("response data: ", data);

  if (typeof data !== "object") {
    Toast.fail("请检查网络设置");
    return Promise.reject(data);
  }
  if (data.code != 200) {
    if (data.message) Toast.fail(data.message);
    return Promise.reject(data);
  }
  return data;
};

export default request;
