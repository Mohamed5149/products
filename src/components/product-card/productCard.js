import { useState } from 'react'
import { useDispatch } from 'react-redux';
import './productCard.scss';
import * as actionCreators from '../../store/actions/actionCreators';
import ModalView from '../modal-view/modalView';

const ProductCard = ({ product }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(actionCreators.addProductToCart(product))
    }

    return (
        <div className="card-section col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src={product.image} alt={product.title} />
                <div className="card-body">
                    <div className="card-body-text">
                        <p className="card-text">{product.title}</p>
                        <p className="card-text">{product.category}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button onClick={() => handleShow()} type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button onClick={() => addProductToCart(product)} type="button" className="btn btn-sm btn-outline-secondary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalView product={product} show={show} handleClose={handleClose} />
        </div>
    )
}

export default ProductCard;