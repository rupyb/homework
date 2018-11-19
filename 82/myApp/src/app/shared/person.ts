export interface Person {
    firstName: string;
    lastName: string;
    address: Address;
}

export interface Address {
    number: number;
    street: string;
    city: string;
    state: string;
    zip: string;
}
