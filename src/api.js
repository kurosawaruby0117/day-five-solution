import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = () => api.get("/coins");
export const API = {
  detail: id => api.get(`coins/${id}`),
  exchanges: id => api.get(`coins/${id}/exchanges`),
  markets: id => api.get(`coins/${id}/markets`)
};
