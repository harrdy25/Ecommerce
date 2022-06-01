import axios from "axios";
import { BASE_URL } from "../shared/baseUrl";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
});

export const sendRequest = (config) => {
    return axiosInstance.request(config);
}

export const getRequest = (path) => {
    return sendRequest({
        url: path,
        mathod: 'GET'
    });
}