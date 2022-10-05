export type TApiResponse = {
    status: number
    statusText: string;
    data: any;
    error: any;
    loading: boolean;
}
export type TPostApiResponse = TApiResponse & {
    postAPIData: Function
}
export type TGetApiResponse = TApiResponse & {
    getAPIData: Function
}