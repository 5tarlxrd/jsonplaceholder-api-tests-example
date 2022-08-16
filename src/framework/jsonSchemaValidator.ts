import Ajv from 'ajv';
import { addressSchema } from '../schemas/addressSchema';
import { companySchema } from '../schemas/companySchema';
import { geoSchema } from '../schemas/geoSchema';
import { userSchema } from '../schemas/userSchema';
import { userArraySchema } from '../schemas/userArraySchema';


export function isValidJsonSchema(data: any, schema: string) {
    const ajv = new Ajv({ schemas: [addressSchema, companySchema, geoSchema, userSchema, userArraySchema] })
    const valid = ajv.validate(schema, data)
    if (!valid) {
        console.log(ajv.errors);
        return valid;
    }
    console.log(`JSON schema validation - ${valid}`);
    return valid;
}