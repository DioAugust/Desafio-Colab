import axios, { AxiosInstance } from "axios";
import { baseURL } from "../constants/baseURL";

interface ApiInstance extends AxiosInstance {}

const api: ApiInstance = axios.create({
  baseURL: baseURL.production,
});

export { api };