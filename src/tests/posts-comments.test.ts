import { isEmailValid } from '@sideway/address';
import { AxiosResponse } from 'axios';
import randomstring from 'randomstring';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { ApiClient } from '../framework/client';
import { isValidJsonSchema } from '../framework/jsonSchemaValidator';
import { Post } from '../models/post';

const client = new ApiClient();
const userName = 'Delphine';
let user: User;

beforeAll(async () => {
  user = (await client.user.findByUsername(userName)).data[0];
});

describe('get all user\'s posts and verify email format in posts comments', () => {
  const comments: Comment[] = [];
  beforeAll(async () => {
    const posts: Post[] = (await client.user.getAllPosts(user.id)).data;
    posts.forEach(async (post: Post) => {
      const commnetsData = (await client.post.getAllComments(post.id)).data;
      comments.push(...commnetsData);
    });
  });
  // email validated during response JSON schema validation according to RFC 5321, section 4.1.2.
  it('comments should have valid schema', async () => {
    expect(isValidJsonSchema(comments, 'commentArray.json')).toBe(true);
  });
  // in this test can be provided additional validation using @sideway/address, e.g. validate for specific domain, etc.
  it('comments should have valid email format', async () => {
    expect(comments.every((comment) => isEmailValid(comment.email))).toBe(true);
  });
});

describe('get all comments for not existing post', () => {
  let response: AxiosResponse<any, any>;
  beforeAll(async () => {
    const wrongPostId = `invalid${randomstring.generate(4)}`
    response = await client.post.getAllComments(wrongPostId);
  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have an empty array', async () => {
    expect(response.data.length).toBe(0);
  });
});