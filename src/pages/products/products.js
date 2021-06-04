import { useState } from 'react'
import ProductCard from '../../components/product-card/productCard';
import product1Image from '../../assets/camera-260nw-610909205.jpg'
import product2Image from '../../assets/images.jpg'
import product3Image from '../../assets/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196.jpg'
import product4Image from '../../assets/download (2).jpg'
import product5Image from '../../assets/download (1).jpg'
import product6Image from '../../assets/1536120359_1433711.jpg'

const Products = () => {
    const [products] = useState([
        {
            id: 1,
            name: "product1",
            image: product1Image,
            category: "cat1",
            price: 10
        },
        {
            id: 2,
            name: "product2",
            image: product2Image,
            category: "cat2",
            price: 20
        },
        {
            id: 3,
            name: "product3",
            image: product3Image,
            category: "cat3",
            price: 30
        },
        {
            id: 4,
            name: "product4",
            image: product4Image,
            category: "cat4",
            price: 40
        },
        {
            id: 5,
            name: "product5",
            image: product5Image,
            category: "cat5",
            price: 50
        },
        {
            id: 6,
            name: "product6",
            image: product6Image,
            category: "cat6",
            price: 60
        },
    ])

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