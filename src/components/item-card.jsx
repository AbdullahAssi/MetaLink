import React from "react";
import './item_card.css';
import Items from './items';  

const Item_card = (props) => {
    return (
            <div className="item_container">
                <img className="nft" src={props.nft} alt="" />
                
                <div className="item_profile">
                    <img className="pp" src={props.sellerprofile} alt="" />
                    <img className="verified_icon" src={props.verified} width="30px" alt="" />
                </div>

                <h1 className="verified_des">{props.des}</h1>
                <span>by</span>
                <h1 className="verified_Seller">{props.seller}</h1>
                <h1 className="verified_items">{props.item}</h1>
            </div>
    )
}

export default Item_card;
