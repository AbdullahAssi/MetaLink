import React from "react";
import Item_card from './items'
import './ani.css';

const Top_Collection = (props) => {
    return (
        <div>
            <div className='w-full px-20 lg:px-48 mt-[100px] lg:my-1'>
                <div className='text-5xl font-semibold text-white text-center'>Top Collection</div>
            </div>

            <div className='top_collection flex flex-wrap items-center justify-center flex-row  gap-4 px-[10px] sm:px-[70px] overflow-x-auto my-24'>
                <Item_card /> 
            </div>
        </div>
    );
}

export default Top_Collection;
