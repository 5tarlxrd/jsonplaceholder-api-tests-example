import { AxiosResponse } from 'axios';
import randomstring from 'randomstring';
import { User } from '../models/user';
import { ApiClient } from '../framework/client';
import { isValidJsonSchema } from '../framework/jsonSchemaValidator';
import { Post } from '../models/post';

const client = new ApiClient();
const userName = 'Delphine';
let user: User;

beforeAll(async () => {
  user = (await client.user.findByUsername(userName)).data[0];
});

describe('get all user\'s posts', () => {
  let response: AxiosResponse<any, any>;

  beforeAll(async () => {
    response = await client.user.getAllPosts(user.id);
  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have expected content type', async () => {
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  it('response should have valid schema', async () => {
    expect(isValidJsonSchema(response.data, 'postArray.json')).toBe(true);
  });

  it('posts should have valid userId', async () => {
    const posts: Post[] = response.data;
    expect(posts.every((post) => post.userId === user.id)).toBe(true);
  });
});

describe('find single user\'s post by postId', () => {
  let response: AxiosResponse<any, any>;

  beforeAll(async () => {
    const posts = (await client.user.getAllPosts(user.id)).data;
    const postId = posts[0].id;
    response = await client.user.findUserPostByPostId(user.id, postId);

  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have expected content type', async () => {
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  it('response should have valid schema', async () => {
    expect(isValidJsonSchema(response.data, 'postArray.json')).toBe(true);
  });

  it('post should have valid userId and postId', async () => {
    expect(response.data[0].userId).toBe(user.id);
  });
});

describe('get all user\'s posts for not existing user', () => {
  let response: AxiosResponse<any, any>;

  beforeAll(async () => {
    const wrongUserId = `invalid${randomstring.generate(4)}`
    response = await client.user.getAllPosts(wrongUserId);
  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have an empty array', async () => {
    expect(response.data.length).toBe(0);
  });
});