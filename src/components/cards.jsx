import React, { useState } from "react";
import  {card}  from "../constants";
import  Collection_cards  from "./collection_cards";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Card() {
    const [visible, setVisible] = useState(4);
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    const showMoreItems = () => {
        setVisible(prevState => prevState + 4);
    };

    return (
        <div className="p-10 sm:p-20 cards flex flex-wrap items-center justify-center gap-12 box-shadow: 0 5px 13px hsla(214, 19%, 29%, 0.2); max-w-[1280px]">
            {card.slice(0, visible).map((cards, i) => (
                <div
                    key={cards.id}
                    ref={i === 0 ? ref : null} 
                >
                    {inView && ( 
                        <motion.div
                            initial={{ opacity: 0, translateX: -50, translateY: 0 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.2 }}
                        >
                            <Collection_cards
                                nft={cards.nft}
                                seller={cards.seller}
                                sellerprofile={cards.sellerProfile}
                                des={cards.description}
                                price={cards.price}
                                highestbid={cards.HighestBid}
                                eth={cards.ethereum}
                                bolt={cards.flash}
                            />
                        </motion.div>
                    )}
                </div>
            ))}

                <button onClick={showMoreItems} className="text-white btn">
                    Explore More
                </button>
            </div>
        );
    }
export default Card