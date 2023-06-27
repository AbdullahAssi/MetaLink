import React from "react";
import { collection } from "../constants";
import Item_card from "./item-card";

function Items() {
    return (
        <>
        {collection.map((item) => (
            <Item_card
            key={item.id}
            nft={item.nft}
            seller={item.seller}
            sellerprofile={item.sellerProfile}
            des={item.description}
            item={item.items}
            verified={item.verified}
            />
        ))}
        </>
    );
}

export default Items;
