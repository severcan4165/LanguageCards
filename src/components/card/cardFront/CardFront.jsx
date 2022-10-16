
import React from "react"
import "./cardfront.css"
const CardFront = ({item}) => {

  return (

    <>

            <img className="cardImg" src={item.img} alt="" />
            <h2>{item.name}</h2>
 
        </>

    

  )
}

export default CardFront;