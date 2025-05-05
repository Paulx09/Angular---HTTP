import { Address } from "./address.model";
import { Name } from "./name.model";

export interface User {
    address: Address;
    id: number;
    email: string;
    username: string;
    password: string;
    name: Name;
    phone: string;
}