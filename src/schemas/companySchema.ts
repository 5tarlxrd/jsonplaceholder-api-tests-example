
import { Company } from '../models/company';
import { JSONSchemaType } from 'ajv';

export const companySchema: JSONSchemaType<Company> = {
  $id: 'company.json',
  type: 'object',
  properties: {
    name: { type: 'string' },
    catchPhrase: { type: 'string' },
    bs: { type: 'string' }
  },
  required: ['name', 'catchPhrase', 'bs'],
  additionalProperties: false
};