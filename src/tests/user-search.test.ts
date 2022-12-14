import { AxiosResponse } from 'axios';
import randomstring from 'randomstring';
import { ApiClient } from '../framework/client';
import { isValidJsonSchema } from '../framework/jsonSchemaValidator';

const client = new ApiClient();

describe('search user by valid username', () => {
  const userName = 'Delphine';
  let response: AxiosResponse<any, any>;

  beforeAll(async () => {
    response = await client.user.findByUsername(userName);
  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have expected content type', async () => {
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  it('response should have valid schema', async () => {
    expect(isValidJsonSchema(response.data, 'userArray.json')).toBe(true);
  });

  it('response should have valid username of searched user', async () => {
    expect(response.data[0].username).toBe(userName);
  });
});

describe('search user by invalid username', () => {
  const userName = `invalid-${randomstring.generate(4)}`;
  let response: AxiosResponse<any, any>;

  beforeAll(async () => {
    response = await client.user.findByUsername(userName);
  });

  it('response status code should be 200', async () => {
    expect(response.status).toBe(200);
  });

  it('response should have an empty array', async () => {
    expect(response.data.length).toBe(0);
  });
});