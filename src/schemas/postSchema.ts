import { Post } from '../models/post';
import { JSONSchemaType } from 'ajv';

export const postSchema: JSONSchemaType<Post> = {
  $id: 'post.json',
  type: 'object',
  properties: {
    userId: { type: ['integer', 'string'] },
    id: { type: ['integer', 'string'] },
    title: { type: 'string' },
    body: { type: 'string' }
  },
  required: ['userId', 'id', 'title', 'body'],
  additionalProperties: false
};