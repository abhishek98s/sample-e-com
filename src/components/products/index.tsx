import React from 'react';
import './products.scss';
import { IProduct } from '../../types/product';

interface ProductProps {
    product: IProduct,
    addToCart: (product: IProduct) => void;
}


const Product: React.FC<ProductProps> = ({ product, addToCart }) => {

    const { id, title, price, image } = product;

    return (
        <div className="product">
            <div className="image-wrapper mb-[24px]">
                <img src={image} alt='product' />
            </div>

            <div className="title mb-[8px] font-bold">{title}</div>

            <div className="flex justify-between">
                <div className="price-wrapper">{`$ ${price}`}</div>

                <button className="add-cart" onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}
export default Product;
