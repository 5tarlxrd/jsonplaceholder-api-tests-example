
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export abstract class BaseHttpRequest {
  protected options: AxiosRequestConfig = {};

  public abstract body(body: any): this

  public prefixUrl(url: string): this {
    this.options.baseURL = url;
    return this;
  }

  /**
   * @param url Can be full url, but only in case prefixUrl is not set
   */
  public url(url: string): this {
    this.options.url = url;
    return this;
  }

  public method(method: Method): this {
    this.options.method = method;
    return this;
  }

  public headers(headers: Record<string, string | number | boolean>): this {
    this.options.headers = this.options.headers ?? {}
    this.options.headers = {
      ...this.options.headers,
      ...headers
    }
    return this;
  }

  public searchParams(searchParams: URLSearchParams): this {
    this.options.params = searchParams;
    return this;
  }

  public async send(): Promise<AxiosResponse> {
    try {
      return await axios(this.options as any);
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        return err.response;
      } else {
        throw err;
      }
    }
  }
}