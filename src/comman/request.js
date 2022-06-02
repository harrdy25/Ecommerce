import axios from "axios";
import { BASE_URL } from "../shared/baseUrl";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
});

export const senRequet = (config) => {
    return axiosInstance.request(config);
}
export const getRequest = (path) => {
    return senRequet({
        url: path,
        method: 'GET',
    })
}
export const postRequest = (path, data) => {
    return senRequet({
        url: path,
        method: 'POST',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}

export const deleteRequest = (path, id) => {
    return senRequet({
        url: path + id,
        method: 'DELETE',
    })
}

export const updateRequest = (path,id, data) => {
    return senRequet({
        url: path + id,
        method: 'PUT',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}