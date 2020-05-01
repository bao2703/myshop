import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class BaseService {
  private http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: "https://localhost:44349",
    });

    // this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
    //     ...param
    // }));

    // // this middleware is been called right before the response is get it by the method that triggers the request
    // this.api.interceptors.response.use((param: AxiosResponse) => ({
    //     ...param
    // }));
  }

  public head<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.head(url, config);
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this.http.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get(url, config);
  }

  public post<T, R = AxiosResponse<T>>(url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post(url, data, config);
  }

  public put<T, R = AxiosResponse<T>>(url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>>(url: string, data?: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.patch(url, data, config);
  }

  public delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete(url, config);
  }
}
