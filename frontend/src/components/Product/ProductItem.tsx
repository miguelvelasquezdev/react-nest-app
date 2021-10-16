
import { Product } from './Product';
import * as prooductService from './ProductService'
import * as Icon from 'react-feather';

import "./ProductItem.css";
import { useHistory } from 'react-router-dom';

interface Props {
    product: Product;
    loadProducts: () => void;
}

const ProductItem = ({product, loadProducts}: Props) => {

    console.log(product);
    

    const history = useHistory();

    const handleDelete = async (id: string) => {
        await prooductService.deleteProduct(id)
        loadProducts(); 
    }

    return (
        <div className="col-md-4">
            <div className="card card-body product-card">
                <div className="d-flex justify-content-between">
                    <h1 style={{ cursor: "pointer" }} onClick={() => history.push(`/update/${product._id}`)} >
                        {product.name}
                    </h1>
                    <span style={{ cursor: "pointer" }} onClick={() => product._id && handleDelete(product._id)}>
                    <Icon.Trash size="16" />
                    </span>
                </div>
                <img className="img-fluid" src={product.imgURL} alt={product.name}></img>
            </div>
        </div>
    )
}

export default ProductItem
