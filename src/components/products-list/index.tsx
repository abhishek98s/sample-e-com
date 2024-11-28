import React from 'react';
import './products-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../types/product';
import Product from '../products';
import { IRootState } from '../../redux/store';
import { addToCart } from '../../redux/slice/productSlice';

function ProductsList() {
    const product_list = useSelector((state: IRootState) => state!.product.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product: IProduct) => {
        const addQuantiy: IProduct = { ...product, quantity: 1 };
        dispatch(addToCart(addQuantiy));
    }

    return (
        <section className="product-wrapper">
            <div className="cus-container">
                <div className="title mt-[70px] text-[14px] mb-[40px]">Products</div>

                <div className="product-list grid grid-cols-4 gap-4">
                    {product_list.map((product: IProduct) => (
                        <Product key={product.id} product={product} addToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList;
