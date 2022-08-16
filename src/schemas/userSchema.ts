import { User }  from '../models/user';
import { JSONSchemaType } from 'ajv';

export const userSchema: JSONSchemaType<User> = {
  $id: 'user.json',
  type: 'object',
  properties: {
    id: { type: ['integer', 'string'] },
    name: { type: 'string' },
    username: { type: 'string' },
    email: { type: 'string', format: 'email' },
    address:  { $ref: 'address.json' },
    phone: { type: 'string' },
    website: { type: 'string' },
    company: { $ref: 'company.json' }
  },
  required: ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'],
  additionalProperties: false
};