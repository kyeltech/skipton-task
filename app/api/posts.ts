import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.org",
  headers: {
    "Content-Type": "application/json",
  },
});

async function ApiClient<T>(endpoint: string): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint);
  return response.data;
}

export default ApiClient;
