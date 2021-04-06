import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/coins/"
});

export const API = {
  detail: id => api.get(`${id}`),
  exchanges: id => api.get(`${id}/exchanges`),
  markets: id => api.get(`${id}/markets`)
};
