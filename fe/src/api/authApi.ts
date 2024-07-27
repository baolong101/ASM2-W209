import apiClient from "./apiClient";

export interface IRegisterBody {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export const AuthApi = {
  register: (data: IRegisterBody) => apiClient.post("/register", data),
  login: (data: ILoginBody) => apiClient.post("/login", data),
};
