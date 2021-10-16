import { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from './Product';

import * as ProductService from './ProductService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const ProductForm = () => {

    const initialState = {
        name: '',
        description: '',
        imgURL: '',
        price: 0
    }

    const [product, setProduct] = useState<Product>(initialState);

    const history = useHistory();

    const handleInputChange = (e: InputChange) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await ProductService.postProduct(product);
        setProduct(initialState);
        history.push("/");
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>New Product</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Write a name for this product"
                                onChange={handleInputChange}
                                className="form-control"
                                value={product.name}
                                autoFocus
                            />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="form-control"
                                    placeholder="Write a description"
                                    onChange={handleInputChange}
                                    value={product.description}
                                    >
                                </textarea>
                            </div>

                            <div className="form-group">
                                <input
                                type="text"
                                name="imgURL"
                                placeholder="Write a url for load some image"
                                className="form-control"
                                onChange={handleInputChange}
                                value={product.imgURL}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    name="price"
                                    placeholder="Price for this product"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={product.price}
                                />
                            </div>
                            <button className="btn btn-primary">Create Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForm
