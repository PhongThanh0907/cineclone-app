import { AxiosResponse } from "axios";
import { User } from "../types/User";
import { axiosClient } from "./axiosConfig";

const USER_API = {
  REGISTER_USER: "/users/register",
  LOGIN_USER: "/users/login",
  FORGOT_PASSWORD: "/users/forgotpassword",
};

const userService = {
  registerUser: (data: User) => {
    return axiosClient.post<unknown, AxiosResponse>(
      USER_API.REGISTER_USER,
      data
    );
  },

  loginUser: (data: User) => {
    return axiosClient.post(USER_API.LOGIN_USER, data);
  },

  forgotPassword: (data: { email: string }) => {
    return axiosClient.post(USER_API.FORGOT_PASSWORD, data);
  },
};

export default userService;
