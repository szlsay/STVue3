import request from "@/utils/axios";

export interface LoginAndRegParams {
  username: string;
  password: string;
}

export function login(params: LoginAndRegParams) {
  return request({
    url: "/user/login",
    method: "post",
    data: params,
  });
}
