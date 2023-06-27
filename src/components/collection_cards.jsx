import React from "react";
import './collection_card.css';


export default function Collection_cards(props){
    return(
        <div className="card-container">

            <div className="collection_Card" key={props.id}>

                <img src={props.nft} alt="nft"  className="nft_img"/>
                <button className="btn-card">Place Bid <img src= {props.bolt} alt="" width="15px" /></button>

                <div className="profile">
                    <img src={props.sellerprofile} alt="seller"  />
                    <p>{props.seller}</p>
                </div>

                <h2 className="des">{props.des}</h2>

                <div className="price_bid">
                    <div>
                        <h1 className="price_title">Price</h1>
                        <div className="price">
                            <p>{props.price}</p>
                            <img src={props.eth} width="20px" alt="eth" />
                        </div>
                    </div>

                    <div>
                        <h1 className="price_title"> Highest Bid</h1>
                        <div className="price">
                            <p>{props.highestbid}</p>
                            <img src={props.eth} width="20px" alt="eth" />
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}