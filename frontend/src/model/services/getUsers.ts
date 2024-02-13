import { api } from "../config/api";
import { User } from "../types/User";

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/getUsers");
  return response.data;
};

export { getUsers };
