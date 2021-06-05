import './productCard.scss';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();


    const addProductToCart = (product) => {
        dispatch(actionCreators.addProductToCart(product))
    }

    return (
        <div className="card-section col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src={product.image} alt={product.name} />
                <div className="card-body">
                    <div className="card-body-text">
                        <p className="card-text">{product.title}</p>
                        <p className="card-text">{product.category}</p>
                        {/* <p className="card-text">{product.description}</p> */}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button onClick={() => addProductToCart(product)} type="button" className="btn btn-sm btn-outline-secondary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;