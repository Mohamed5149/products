import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './cart.scss';
import * as actionCreators from '../../store/actions/actionCreators';

const Cart = () => {
    let history = useHistory();

    const cartProducts = useSelector(state => state.cartProducts);
    const dispatch = useDispatch();

    const increaseQuantity = (productId) => {
        dispatch(actionCreators.increaseQuantity(productId))
    }

    const decreaseQuantity = (productId) => {
        dispatch(actionCreators.decreaseQuantity(productId))
    }

    const removeFromCart = (productId) => {
        dispatch(actionCreators.removeProductFromcart(productId))
    }

    const reviewOrder = () => {
        history.push("/review-order");
    }

    return (
        <div className="cart-container">
            {
                cartProducts.map(product => {
                    return (
                        <div className="card" key={product.id}>
                            <div className="card-header">
                                <span>{product.title}</span>
                                <i onClick={() => removeFromCart(product.id)} className="fa fa-trash"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-body-price">
                                    <span>Price:</span>
                                    <span>{product.price * product.quantity}</span>
                                </div>
                                <div className="card-body-quantity">
                                    <span>Quantity:</span>
                                    <span>{product.quantity}</span>
                                    <div className="card-body-quantity-btns">
                                        <button onClick={() => decreaseQuantity(product.id)}><i className="fa fa-minus"></i></button>
                                        <button onClick={() => increaseQuantity(product.id)}><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                cartProducts.length > 0 ?
                    <button onClick={() => reviewOrder()} className="review-btn">Review Your Order</button> :
                    <span className="warning-message">Your Cart Is Empty</span>
            }
        </div>
    )
}
export default Cart;