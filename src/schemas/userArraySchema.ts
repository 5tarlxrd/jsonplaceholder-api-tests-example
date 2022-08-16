import { User } from '../models/user';
import { JSONSchemaType } from 'ajv';

export const userArraySchema: JSONSchemaType<User[]> = {
  $id: 'userArray.json',
  type: 'array',
  items: {
    $id: 'user.json',
    type: 'object',
    properties: {
      id: { type: ['integer', 'string'] },
      name: { type: 'string' },
      username: { type: 'string' },
      email: { type: 'string' },
      address: { $ref: 'address.json' },
      phone: { type: 'string' },
      website: { type: 'string' },
      company: { $ref: 'company.json' }
    },
    required: ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'],
    additionalProperties: false
  }
};