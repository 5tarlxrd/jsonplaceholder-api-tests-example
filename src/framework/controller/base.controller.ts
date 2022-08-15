import { BaseHttpRequest } from '../requestBuilder/baseHttpRequest';

export type ControllerOptions = {
  prefixUrl: string,
  RequestBuilder: new () => BaseHttpRequest
}

export class BaseController {
  constructor(protected readonly options: ControllerOptions) { }

  protected request() {
    return new this.options.RequestBuilder()
      .prefixUrl(this.options.prefixUrl);
  }
}