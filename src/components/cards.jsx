import React, { useState } from "react";
import  {card}  from "../constants";
import  Collection_cards  from "./collection_cards";

function Card (){

    const [visible , setVisible] = useState(4);

    const showMoreItems =() =>{
        setVisible(prevState => prevState +4 );
    }
    return (
        <div className="p-10 sm:p-20 cards flex flex-wrap items-center justify-center gap-12 box-shadow: 0 5px 13px hsla(214, 19%, 29%, 0.2); max-w-[1280px]">
            {card.slice(0,visible).map(cards => (
                <Collection_cards 
                    key = {cards.id}
                    nft = {cards.nft}
                    seller = {cards.seller}
                    sellerprofile = {cards.sellerProfile}
                    des = {cards.description}
                    price = {cards.price}
                    highestbid = {cards.HighestBid}
                    eth = {cards.ethereum}
                    bolt = {cards.flash}
                />
            ))}
            <button onClick={showMoreItems} className="text-white btn">Explore More</button>
        </div>
    )
}
export default Card