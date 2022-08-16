import { BaseController } from './base.controller';

export class PostController extends BaseController {

  async getByPostId(postId: string | number) {
    return await this.request()
      .method('GET')
      .url(`posts/${postId}`)
      .send();
  }

  async getAllComments(postId: string | number) {
    return await this.request()
      .method('GET')
      .url(`posts/${postId}/comments`)
      .send();
  }
}