
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();


    const addProductToCart = (product) => {
        dispatch(actionCreators.addProductToCart(product))
    }

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img style={{ width: '10rem', height: '10rem' }} className="card-img-top" src={product.image} alt={product.name} />
                <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button onClick={() => addProductToCart(product)} type="button" className="btn btn-sm btn-outline-secondary">Add To Cart</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;