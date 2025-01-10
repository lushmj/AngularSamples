export interface GeoLocation {
  lat: string;
  long: string;
}
export interface Address {
  geolocation: GeoLocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
} 
// Name Model
export interface Name {
  firstname: string;
  lastname: string;
}
export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}
