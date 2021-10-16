import { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import { Product } from './Product'

import * as productService from './ProductService'

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const loadProducts = async () => {
        const res = await productService.getProducts();

        const formatProduct = res.data.products.map(product => {
            return {
                ...product,
                createdAt: product.createdAt ? new Date(product.createdAt) : new Date(),
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        setProducts(formatProduct);
        
        
    }

    useEffect(() => {
        loadProducts();
    })
    

    return (
        <div className="row">
            {products.map(product => {
                return <ProductItem product={product} key={product._id} loadProducts={loadProducts} />
            })}
        </div>
    )
}

export default ProductList