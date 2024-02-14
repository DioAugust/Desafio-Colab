import { api } from "../config/index";
import { User } from "../types/index";

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/getUsers");
  return response.data;
};

export { getUsers };
