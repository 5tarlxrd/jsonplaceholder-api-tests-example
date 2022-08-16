import { Comment } from '../models/comment';
import { JSONSchemaType } from 'ajv';

export const commentSchema: JSONSchemaType<Comment[]> = {
  $id: 'commentArray.json',
  type: 'array',
  items: {
    $id: 'comment.json',
    type: 'object',
    properties: {
      postId: { type: ['integer', 'string'] },
      id: { type: ['integer', 'string'] },
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      body: { type: 'string' }
    },
    required: ['postId', 'id', 'name', 'email', 'body'],
    additionalProperties: false
  }
};