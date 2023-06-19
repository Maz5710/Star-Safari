import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const productsUrl = import.meta.env.VITE_WC_PRODCUTS_URL; 
console.log(productsUrl);

const Shopfront = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${productsUrl}`)
        .then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    const Products = ({ products }) => {
        const mappedProducts = products.map((product, index) => {
            function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'https://via.placeholder.com/150';
                }
            }

            return (
                <div className='item-container' key={index}>
                    <div className='d-flex flex-col'>
                    <img className='product-Image' src={getFeaturedImage(product)} alt='Product Image' />
                    <h4 className='name'>{product.name}</h4>
                    <h3 className='product-price'>${product.prices.price} {product.prices.currency_code}</h3>
                    <Link className='product-link' to={`/product/${product.id}`}>
                        <button>Add to cart</button>
                    </Link>

                    </div>
                </div>
            )
        })

        return (
            <>
                {mappedProducts}
            </>
        )
    }

  return (
    <>
        <div id='hero-sub' className="hero-tours">
            <div className="hero-content">
            <h1>Safari Tours, Courses and Events Shop</h1>
            </div>
        </div>

        <div id="shop-page" className='container'>
            <div id='product-grid' className='grid-container'>
            {loading ? <p id='loading'>Catch a falling star...</p> : <Products products={products} />}
        </div>
    </div>
    </>
  )
}

export default Shopfront
       