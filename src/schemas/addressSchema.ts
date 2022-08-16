
import { Address } from '../models/address';
import { JSONSchemaType } from 'ajv';

export const addressSchema: JSONSchemaType<Address> = {
  $id: 'address.json',
  type: 'object',
  properties: {
    street: { type: 'string' },
    suite: { type: 'string' },
    city: { type: 'string' },
    zipcode: { type: 'string' },
    geo: { $ref: 'geo.json' },
  },
  required: ['street', 'suite', 'city', 'zipcode', 'geo'],
  additionalProperties: false
};