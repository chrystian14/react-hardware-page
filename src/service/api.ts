import axios from "axios";

export const hardwareApi = axios.create({
  baseURL: "https://hardware-fake-api.onrender.com/api",
});
