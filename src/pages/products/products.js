import { useState, useEffect } from 'react'
import ProductCard from '../../components/product-card/productCard';
import Axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products').then(res => {
            setProducts(res.data)
        })
    }, []);

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {
                        products.map(product => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Products;