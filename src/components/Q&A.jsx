import {useState} from "react";
import { QA } from "../constants";
import './Q&A.css';

function Accordion (){

    const [open , setopen] = useState(null)

    const toggle = (index) => {
        if (open === index ){
            return setopen(null)
        } 

        setopen(index)
    }
    return(
        <div className="qa">

            <h1 className="text-5xl font-semibold text-white text-center py-4">Q&A</h1>
            <p className="text-2xl max-w-[500px] text-center pb-14 sm:text-3xl">We are a huge marketplace dedicated to connecting great artists of all Metalink with their fans and unique token collectors!</p>
            <div className="wrapper">
                <div className="accordion">
                    {QA.map(( items , index )=> (
                        <div className="Accordion-items">
                            <div className="title" onClick={() => toggle(index)}>
                                <h2>{items.title}</h2>
                                <img className="sign" src={open ===index ? items.arrowUp: items.arrowDown} width="20px"/> 
                            </div>
                            <div className={open ===index ? 'content show': 'content'}>
                                <p>{items.ans}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion