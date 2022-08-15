import { BaseHttpRequest } from "./baseHttpRequest";

export class JsonRequest extends BaseHttpRequest {
  constructor() {
    super()
    this.options = {
      ...this.options,
      responseType: 'json'
    };
  }

  public body(body: any): this {
    this.options.data = body;
    return this;
  }
}