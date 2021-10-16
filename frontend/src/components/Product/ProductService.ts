import axios from 'axios';
import { Product } from './Product';

const API = 'http://localhost:5000'

export const getProducts = async () => {
    return await axios.get<{products: Product[]}>(`${API}/product`);
}

export const getProduct = async (id: string) => {
    return await axios.get<Product>(`${API}/product/${id}`);
}

export const postProduct = async (product: Product) => {
    return await axios.post(`${API}/product/create`, product);
}

export const deleteProduct = async (id: string) => {
    return await axios.delete<Product>(`${API}/product/delete?productID=${id}`);
}

export const updateProduct = async (id: string, product: Product) => {
    return await axios.put<Product>(`${API}/product/delete?productID=${id}`, product);
}