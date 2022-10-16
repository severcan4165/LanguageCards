
import React, { useState } from "react"

import CardFront from "./cardFront/CardFront.jsx";
import CardBack from "./cardBack/CardBack.jsx";
import "./card.css"

const Card = ({data}) => {
    const [show, setShow] = useState(false);
    // const togglep = document.querySelectorAll(".toggleP");

    return (

            <div className="card" onClick={() => setShow((a) => !a)}>
                        {selectCard(show,data)}
            </div>

  );
};
const selectCard = (show,data) => {
    if(show){
        return <CardBack item={data}/>;
       
    }
    else{
       return <CardFront item={data} />;
    }
 
};

export default Card;