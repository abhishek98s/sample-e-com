import React from 'react';
import cart from '../../images/cart.svg';
import './navbar.scss';

function Navbar() {
    return (
        <nav>
            <div className="cus-container">
                <div className="h-[60px] flex justify-between items-center">
                    <div className='text-[14px] text-black font-bold'>Logo</div>

                    <div className="icon_wrapper cursor-pointer flex-center rounded-full p-[6px]">
                        <img src={cart} className='max-w-[20px] w-full h-[20px]' alt='icon-cart' />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;