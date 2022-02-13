import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { getToken } from "Token";
import config from "config";
export const baseUrl = config.REACT_APP_API_ROOT;
export const headers = { "Content-Type": "application/json" };

export let head_token = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("userToken")),
    "x-access-token": JSON.parse(localStorage.getItem("userToken"))
};
export function postAxios(url, data) {
    head_token.Authorization = getToken();
    if (head_token.Authorization) {
        const response = axios.post(`${baseUrl + url}`, data, {
            headers: head_token,
        });
        return response;
    } else return "";
}
