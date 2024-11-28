import React from 'react';
import product1 from '../../images/product-1.png';
import './products.scss';

function Product() {
    return (
        <div className="product">
            <div className="image-wrapper mb-[24px]">
                <img src={product1} alt='product' />
            </div>

            <div className="title mb-[8px] font-bold">Italian premium shirt</div>

            <div className="flex justify-between">
                <div className="price-wrapper">$120</div>

                <button className="add-cart">Add to cart</button>
            </div>
        </div>
    )
}
export default Product;
