import React from 'react';
import cart from '../../images/cart.svg';
import './navbar.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import Sidebar from '../sidebar';

function Navbar() {
    const car_products = useSelector((state: IRootState) => state.product.cart);

    return (
        <nav>
            <div className="cus-container">
                <div className="h-[60px] flex justify-between items-center">
                    <div className='text-[14px] text-black font-bold'>Logo</div>

                    <div className="icon_wrapper cursor-pointer flex-center rounded-full p-[6px] relative">
                        <img src={cart} className='max-w-[20px] w-full h-[20px]' alt='icon-cart' />

                        <div className="cart_no absolute w-[15px] h-[15px] flex-center rounded-full right-0 top-0 text-[12px] bg-black text-white">
                            {car_products.length}
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar />
        </nav>
    )
};

export default Navbar;