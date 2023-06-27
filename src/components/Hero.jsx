import React from 'react'
import {nft} from '../assets'
import './hero.css'

function Hero() {
    return (
            <div className="Hero_container">
                <img src={nft} alt="nft" className='w-20% lg:w-[36%]' />

                <div className='hero_heading'>
                    <h1 className='text-white text-4xl sm:text-5xl  lg:text-7xl font-bold'>Discover rate collection or <span className='text-gradient'>Arts & NFTS</span></h1>
                    <p className='w-full lg:w-3/4 text-lg lg:text-4xl my-10 px-0 lg:px-15 '>We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans and unique token collectors!</p>
                    <button className='btn'>Explore Now</button>
                </div>
            </div>
    )
}

export default Hero