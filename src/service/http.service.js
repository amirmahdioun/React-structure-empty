import axios from "axios";
import {BASE_URL} from "configs/variables.config";

class HttpService {
    constructor() {
        axios.defaults.baseURL = BASE_URL;
        axios.interceptors.request.use((config) => {
            //TODO: Add request interceptor here (onFulfilled)

            return config
        }, (error) => {
            //TODO: Add request interceptor here (onRejected)

            return Promise.reject(error)
        })
        axios.interceptors.response.use((response) => {
            //TODO: Add response interceptor here (onFulfilled)

            return response
        }, (error) => {
            //TODO: Add response interceptor here (onRejected)

            return Promise.reject(error)


        })
    }

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, data, config) {
        return axios.post(url, data, config)
    }

    put(url, data, config) {
        return axios.put(url, data, config)
    }

    patch(url, data, config) {
        return axios.patch(url, data, config)
    }

    delete(url, config) {
        return axios.delete(url, config)
    }
}

export default new HttpService();