import { BaseController } from './base.controller';

export class CommentController extends BaseController {

  async findByPostId(postId: string) {
    const urlQuery = new URLSearchParams({ postId: postId });
    return await this.request()
      .url('comments')
      .searchParams(urlQuery)
      .send();
  }
}