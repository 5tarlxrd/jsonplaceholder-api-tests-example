import { Post } from '../models/post';
import { JSONSchemaType } from 'ajv';

export const postArraySchema: JSONSchemaType<Post[]> = {
  $id: 'postArray.json',
  type: 'array',
  items: {
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
  }
};