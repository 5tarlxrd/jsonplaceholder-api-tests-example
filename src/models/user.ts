import { Address } from './address'
import { Company } from './company'

export interface User {
    id: number | string,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}