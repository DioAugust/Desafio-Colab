import { api } from "../config/api";
import { User } from "../types/User";

const getUsers = async (): Promise<User[]> => {
  const response = await api.get("");
  return response.data.results;
};

export { getUsers };
