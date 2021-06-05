import './reviewOrder.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ReviewOrder = () => {
    let history = useHistory();
    const cartProducts = useSelector(state => state.cartProducts);
    let total = 0;

    const orderNow = ()=>{
        history.push('/user-form')
    }


    return (
        <div className="container">
            <h4>Cart <span className="price"><i className="fa fa-shopping-cart"></i> </span></h4>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map((product, index) => {
                            total = total + product.quantity * product.price;
                            return (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity * product.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            <p>Total Price <span className="price"><b>{total}</b></span></p>
            <button className="btn btn-primary" onClick={()=>orderNow()}>Order Now</button>
        </div>

    )
}
export default ReviewOrder;