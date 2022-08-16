
import { Geo } from '../models/geo';
import { JSONSchemaType } from 'ajv';

export const geoSchema: JSONSchemaType<Geo> = {
  $id: 'geo.json',
  type: 'object',
  properties: {
    lat: { type: 'string' },
    lng: { type: 'string' },
  },
  required: ['lat', 'lng'],
  additionalProperties: false
};