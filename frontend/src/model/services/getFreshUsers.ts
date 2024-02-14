import { api } from "../config/index";
import { User } from "../types/index";

const getFreshUsers = async (): Promise<User[]> => {
  const response = await api.get("/freshUsers");
  return response.data;
};

export { getFreshUsers };
