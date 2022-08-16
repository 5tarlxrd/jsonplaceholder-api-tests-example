import { BaseController } from './base.controller';

export class CommentController extends BaseController {

  async findByPostId(postId: string | number) {
    const urlQuery = new URLSearchParams({ postId: postId.toString() });
    return await this.request()
      .method('GET')
      .url('comments')
      .searchParams(urlQuery)
      .send();
  }
}