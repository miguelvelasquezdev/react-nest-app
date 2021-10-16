export interface Product {
    name: string;
    description: string;
    imgURL: string;
    price: number;
    createdAt?: string | Date;
    _id?: string;
}