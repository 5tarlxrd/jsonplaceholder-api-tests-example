import { BaseController } from './base.controller';

export class PostController extends BaseController {

  async getByUserId(userId: string) {
    return await this.request()
      .url(`posts/${userId}`)
      .send();
  }
}