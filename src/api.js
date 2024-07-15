import axios from "axios";

const api = axios.create({
  baseURL: "https://api.timbu.cloud",
});

export default api;
