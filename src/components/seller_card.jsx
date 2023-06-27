import React, { useState } from "react";

const Seller_Card = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const toggle = () => {
        setIsAdded(prevStat => !prevStat);
    };

    return (
        <div className="seller_container">
        <div className="seller_profile">
            <img className="seller_pp" src={props.item.profile} alt="" width="5%" height="15%" />
            <img  className="verified" src={props.item.verified} width="30px" alt="" />
        </div>

        <div className="seller_details">
            <p className="name">{props.item.name}</p>
            <p>{props.item.nick}</p>
        </div>

        <div className="adduser">
            <img src={isAdded ? props.item.addeduser : props.item.adduser} onClick={toggle} />
        </div>
        </div>
    );
};

export default Seller_Card;
