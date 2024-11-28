import React from 'react';
import './products-list.scss';
import { useSelector } from 'react-redux';
import { IProduct } from '../../types/product';
import Product from '../products';
import { IRootState } from '../../redux/store';

function ProductsList() {
    const product_list = useSelector((state: IRootState) => state!.product.products);

    return (
        <section className="product-wrapper">
            <div className="cus-container">
                <div className="title mt-[70px] text-[14px] mb-[40px]">Products</div>

                <div className="product-list grid grid-cols-4 gap-4">
                    {product_list.map((product: IProduct) => (
                        <Product key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList;
