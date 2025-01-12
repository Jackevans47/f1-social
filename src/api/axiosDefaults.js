import axios from "axios";
// const { default: axios } = require("axios");

axios.defaults.baseURL = "https://f1-social-76a7744b9142.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
