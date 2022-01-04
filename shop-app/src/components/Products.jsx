import React from 'react'
import {popularProducts} from '../data'
import ProductItem from './ProductItem'
import '../style/style.css'

export const Products = () => {
    return (

        <div className="product">
            <div className="products-container">
                {popularProducts.map(item => (
                    <ProductItem item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Products