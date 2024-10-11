import axios from "axios";
const request = axios.create({
  baseURL: "https://gitee.com",
  timeout: "3000",
});

export default request;
