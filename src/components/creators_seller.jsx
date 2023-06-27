import React from 'react'
import Seller from './seller'
import './seller.css'

function Creators_seller() {
    return (
        <div className="seller_card_container p-10 sm:p-20">
            <h1 className='text-5xl font-semibold text-white text-center'>Best Creator & Sellers</h1>

            <div  className='flex justify-center items-center'>
                <Seller />
            </div>
        </div>
    )
}

export default Creators_seller