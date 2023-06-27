import React from 'react';
import Card from './cards';

const Collection = (props) => {
    return (
        <div>
            <div className='w-full px-20 lg:px-48 mt-[100px] lg:my-1'>
                <div className='text-5xl font-semibold text-white text-center'>Discover Items</div>
            </div>

            <div className='items flex justify-center items-center'>
                <Card />
            </div>
        </div>
    );
}

export default Collection;
