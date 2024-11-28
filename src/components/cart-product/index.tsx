import React, { useState } from 'react';
import { IProduct } from '../../types/product';
import './cart.scss';
import { useDispatch } from 'react-redux';
import { setNoOfQuantity } from '../../redux/slice/productSlice';

type CartProductProps = {
    product: IProduct,
    deleteProduct: (title: string) => void,
}

const CartProduct: React.FC<CartProductProps> = ({ product, deleteProduct }) => {
    const { id, title, image, price } = product;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    function handleQuantity(isAdd?: 'add') {

        if (isAdd === 'add') {
            setQuantity((prev) => prev + 1);
            dispatch(setNoOfQuantity({ id, isAdd: 'add' }))
        } else {
            if (quantity === 1) {
                deleteProduct(title);
            };
            setQuantity((prev) => prev - 1);
            dispatch(setNoOfQuantity({ id, isAdd: 'add' }))
        }
    }

    return (
        <div className="cart-product flex gap-4 mb-[24px] p-[8px] rounded-[4px]">
            <div className="left-block max-w-[60px]">
                <img className='max-w-[60px] rounded-[4px] w-full h-[60px] mb-[12px]' src={image} alt='cart' />

                <button onClick={() => deleteProduct(title)} className='text-[14px] font-bold'>Delete</button>
            </div>

            <div className="right-block flex-1">
                <div className="title font-bold text-[16px] mb-[12px]">Italian</div>

                <div className="quantity-box flex gap-2 mb-[12px]">
                    <button onClick={() => handleQuantity()} className='max-w-[24px] rounded-[4px] w-full h-[24px] flex-center text-[16px]'>-</button>
                    <div className='quantity max-w-[24px] rounded-[4px] w-full h-[24px] flex-center text-[16px]'>{quantity}</div>
                    <button onClick={() => handleQuantity('add')} className='max-w-[24px] rounded-[4px] w-full h-[24px] flex-center text-[16px]'>+</button>
                </div>

                <div className="price font-bold">{`$ ${price}`}</div>
            </div>
        </div>
    )
};

export default CartProduct;