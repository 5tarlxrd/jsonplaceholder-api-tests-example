import { BaseController } from './base.controller';

export class UserController extends BaseController {

  async findByUsername(userName: string) {
    const urlQuery = new URLSearchParams({ username: userName })
    return await this.request()
      .method('GET')
      .url('users')
      .searchParams(urlQuery)
      .send();
  }

  async getAllPosts(userId: string | number) {
    return await this.request()
      .method('GET')
      .url(`users/${userId}/posts`)
      .send();
  }

  async findUserPostByPostId(userId: string | number, postId: string | number) {
    const urlQuery = new URLSearchParams({ id: postId.toString() })
    return await this.request()
      .method('GET')
      .url(`users/${userId}/posts`)
      .searchParams(urlQuery)
      .send();
  }
}