import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { addressSchema } from '../schemas/addressSchema';
import { companySchema } from '../schemas/companySchema';
import { geoSchema } from '../schemas/geoSchema';
import { userSchema } from '../schemas/userSchema';
import { userArraySchema } from '../schemas/userArraySchema';
import { postArraySchema } from '../schemas/postArrayShema';
import { commentArraySchema } from '../schemas/commentArraySchema';

export function isValidJsonSchema(data: any, schema: string) {
    const ajv = new Ajv({
        schemas: [
            addressSchema, companySchema, geoSchema, userSchema,
            userArraySchema, postArraySchema, commentArraySchema
        ], 
        allowUnionTypes: true })
    addFormats(ajv);
    const valid = ajv.validate(schema, data)
    if (!valid) {
        console.log(ajv.errors);
        return valid;
    }
    console.log(`JSON schema validation - ${valid}`);
    return valid;
}