import React from "react";
import { seller } from "../constants";
import Seller_Card from "./seller_card";
import './seller_Card.css'
export default function Seller(){
    return(

            <div className="seller_cards ">
            {seller.map((sellers)=>(
                <Seller_Card 
                    key = {sellers.id}
                    item = {sellers}
                    // profile = {sellers.profile}
                    // name = {sellers.name}
                    // nick = {sellers.nick}
                    // verified = {sellers.verified}
                />
            ))}
            </div>
    )
}