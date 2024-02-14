import axios, { AxiosInstance } from "axios";
import { baseURL } from "../constants/index";

interface ApiInstance extends AxiosInstance {}

const api: ApiInstance = axios.create({
  baseURL: baseURL.development,
});

export { api };