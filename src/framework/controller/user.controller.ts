import { BaseController } from './base.controller';

export class UserController extends BaseController {

  async findByUsername(userName: string) {
    const urlQuery = new URLSearchParams({ username: userName })
    return await this.request()
      .url('users')
      .searchParams(urlQuery)
      .send();
  }
}