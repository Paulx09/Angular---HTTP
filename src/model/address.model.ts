export interface Address {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
        lat: string;
        long: string;
    };
}