import { api } from "../config/api";
import { User } from "../types/User";

const getUser = async (id: string): Promise<User> => {
  const response = await api.get("/getUser/" + id);
  return response.data;
};

export { getUser };
