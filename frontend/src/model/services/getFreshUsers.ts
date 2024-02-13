import { api } from "../config/api";
import { User } from "../types/User";

const getFreshUsers = async (): Promise<User[]> => {
  const response = await api.get("/freshUsers");
  return response.data;
};

export { getFreshUsers };
