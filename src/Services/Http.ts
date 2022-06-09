import { _CJAPIKEY } from './../Static/CJApis';
import { _STORE_PATH } from './../Static/Storage';
import axios, { AxiosRequestConfig } from "axios";

export class Http {
    option?: AxiosRequestConfig<any>;

    constructor(option?: AxiosRequestConfig<any>) {
        this.setOption(option);
    }

    setOption = (option?: AxiosRequestConfig<any>) => {
        this.option = option;
    }

    get<T>(url: string): Promise<T> {
        let methodOption = this.option;
        return axios.get(url, methodOption).then((response) => {
            return response.data;
        }).catch((error) => {
            throw (error);
        })
    }
    post<T>(url: string, data: any): Promise<T> {
        let methodOption = this.option;
        return axios.post(url, data, methodOption).then((response) => {
            return response.data;
        }).catch((error) => {
            throw (error);
        })
    }
    put<T>(url: string, data: any): Promise<T> {
        let methodOption = this.option;
        return axios.put(url, data, methodOption).then((response) => {
            return response.data;
        }).catch((error) => {
            throw (error);
        })
    }
    delete<T>(url: string): Promise<T> {
        let methodOption = this.option;
        return axios.delete(url, methodOption).then((response) => {
            return response.data;
        }).catch((error) => {
            throw (error);
        })
    }
}