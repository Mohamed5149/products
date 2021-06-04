import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

const Cart = () => {
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

    return (
        <>
            {
                cartProducts.length > 0 ?
                cartProducts.map(product => {
                    return (
                        <div className="card" key={product.id}>
                            <div className="card-header">{product.name}</div>
                            <div className="card-body">
                                <div className="card-body-image">
                                    <img style={{ width: "50px", height: "50px" }} src={product.image} alt={product.name} />
                                </div>
                                <div className="card-body-price">
                                    <span>price:</span>
                                    <span>{product.price * product.quantity}</span>
                                </div>
                                <div className="card-body-quantity">
                                    <span>quantity</span>
                                    <span>{product.quantity}</span>
                                    <div className="card-body-quantity-btns">
                                        <button onClick={() => decreaseQuantity(product.id)}>decrease</button>
                                        <button onClick={() => increaseQuantity(product.id)}>increase</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => removeFromCart(product.id)}>Remove From Cart</button>
                            </div>
                        </div>
                    )
                })
                : <span>Your Cart Is Empty</span>
            }
        </>
    )
}
export default Cart;