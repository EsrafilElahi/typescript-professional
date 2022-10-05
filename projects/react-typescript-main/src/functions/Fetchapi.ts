import { useState } from "react";
import { TGetApiResponse, TPostApiResponse } from "../types/public.types";
import axios, { AxiosError, AxiosRequestConfig } from "axios"
const BackEndURL = "http://localhost:3700"
export const useApiPost = (): TPostApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const postAPIData = async (path: string, body: object = {}, options: AxiosRequestConfig = {}): Promise<void> => {
        setLoading(true)
        try {
            const axiosResponse = await axios.post(`${BackEndURL}${path}`, body, options)
            setStatusText(axiosResponse?.statusText);
            setData(axiosResponse?.data);
            setStatus(axiosResponse?.status || data.status)
            
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error);
            return alert(status + " - " + error?.message || err?.message)
        }
        setLoading(false)
    }
    return {
        postAPIData,
        status,
        statusText,
        data,
        error,
        loading
    }
}
export const useApiGet = (): TGetApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const getAPIData = async (path: string, options: AxiosRequestConfig = {}): Promise<void> => {
        setLoading(true)
        try {
            const axiosResponse = await axios.get(`${BackEndURL}${path}`, options)
            setStatusText(axiosResponse?.statusText);
            setData(axiosResponse?.data);
            setStatus(axiosResponse?.status || data.status)
            
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error);
            return alert(status + " - " + error?.message || err?.message)
        }
        setLoading(false)
    }
    return {
        getAPIData,
        status,
        statusText,
        data,
        error,
        loading
    }
}
export const useApiDelete = (): [Function] => {
    const [status, setStatus] = useState<number>(0);
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const deleteAPIData = async (path: string, options: AxiosRequestConfig = {}): Promise<void> => {
        try {
            const axiosResponse = await axios.delete(`${BackEndURL}${path}`, options)
            setData(axiosResponse?.data);
            setStatus(axiosResponse?.status || data.status)
            
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error);
            return alert(status + " - " + error?.message || err?.message)
        }
    }
    return [deleteAPIData];
    
}