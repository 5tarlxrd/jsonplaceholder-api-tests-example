import { UserController } from "./controller/user.controller";
import { PostController } from "./controller/post.controller";
import { CommentController } from "./controller/comment.controller";
import { JsonRequest } from "./requestBuilder/jsonRequest";
import type { ControllerOptions } from "./controller/base.controller";

export class ApiClient {
  public readonly post: PostController;
  public readonly comment: CommentController;
  public readonly user: UserController;

  constructor(options?: Partial<ControllerOptions>) {
    const defaultOptions = {
      prefixUrl: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
      RequestBuilder: JsonRequest
    };
    const mergedOptions = {
      ...defaultOptions,
      ...options
    };
    this.post = new PostController(mergedOptions);
    this.comment = new CommentController(mergedOptions);
    this.user = new UserController(mergedOptions);
  }
}