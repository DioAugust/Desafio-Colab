import { BaseURL } from "../types/BaseURL";

const baseURL: BaseURL = {
  development: "http://localhost:3000/api",
  production: "https://randomuser.me/api?results=25&nat=br&exc=login,info,nat,registered",
};

export { baseURL };
