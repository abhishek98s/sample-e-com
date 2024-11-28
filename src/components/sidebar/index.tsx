import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import sort from '../../images/sort.svg';
import close from '../../images/close.svg';
import CartProduct from '../cart-product';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { removeFromCart, sortCartProducts } from '../../redux/slice/productSlice';
import { IProduct } from '../../types/product';
import { toggleCart } from '../../redux/slice/stateSlice';

const Sidebar = () => {
    const cartProducts = useSelector((state: IRootState) => state.product.cart);
    const isCartOpen = useSelector((state: IRootState) => state.state.isCartOpen);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const totalPrice = cartProducts.reduce((acc: number, item: IProduct) => {
                return acc += item.price * item.quantity!;
            }, 0)

            setTotalPrice(totalPrice);
        }

        calculateTotalPrice();
    }, [cartProducts]);


    const handleDeleteProduct = (title: string) => {
        dispatch(removeFromCart({ title }));
    }

    const closeCart = () => {
        dispatch(toggleCart())
    }

    const handleSort = (sortBy: 'a-z' | 'z-a') => {
        dispatch(sortCartProducts({ sortBy }))
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <article className={`${isCartOpen ? 'show' : ''} sidebar-wrapper z-10 fixed top-0 bottom-0 -right-full max-w-[400px] w-full bg-white p-[8px] pt-[24px]`}>
            <div className="flex flex-col h-full">

                <div className="heading pb-[8px] flex justify-between mb-[20px]">
                    <div className="title text-[16px] font-bold">Cart</div>

                    <div onClick={toggleDropdown} className="sort-btn relative flex cursor-pointer rounded-[4px] p-[4px_8px]">
                        <div className="img-wrapper flex-center p-[4px] max-w-[24px] w-full h-[24px]">
                            <img src={sort} alt={sort} />
                        </div>
                        <span className='text-[14px] font-bold'>sort</span>

                        <div hidden={!isDropdownOpen} className={`absolute right-0 top-full mt-[12px] bg-neutral-50 p-[8px] rounded-[4px]`}>
                            <div onClick={() => handleSort('a-z')} className='text-[14px] p-[4px_8px] rounded-[4px] text-neutral-500 hover:bg-neutral-100'>Acending</div>
                            <div onClick={() => handleSort('z-a')} className='text-[14px] p-[4px_8px] rounded-[4px] text-neutral-500 hover:bg-neutral-100'>Decending</div>
                        </div>
                    </div>
                </div>

                <div className="cart-product-list h-full flex-1">
                    {cartProducts && cartProducts.map((cart: IProduct) => (
                        <CartProduct key={cart.id} product={cart} deleteProduct={handleDeleteProduct} />
                    ))}
                    {!cartProducts.length && <div className='text-center font-medium mt-[100px] text-[14px] text-neutral-400'>Cart empty<br />Add some product</div>}
                </div>

                <div className="price-wrapper flex justify-between p-[8px] pt-[16px]">
                    <div className="title text-[14px] font-bold">Total</div>

                    <div className="tot-price p-[4px_12px]">{`$ ${totalPrice}`}</div>
                </div>

                <button onClick={closeCart} className='close-cart w-full h-[40px] flex-center z-10 absolute top-[8px] -left-[60px] max-w-[40px] rounded-[4px]'>
                    <img className='max-w-[20px] w-full h-[20px]' src={close} alt="icon-cancel" />
                </button>
            </div>
        </article>
    )
}

export default Sidebar;