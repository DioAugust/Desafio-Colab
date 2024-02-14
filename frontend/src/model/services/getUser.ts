import { api } from "../config/index";
import { User } from "../types/index";

const getUser = async (id: string): Promise<User> => {
  const response = await api.get("/getUser/" + id);
  return response.data;
};

export { getUser };
