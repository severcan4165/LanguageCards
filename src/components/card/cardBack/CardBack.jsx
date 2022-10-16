import React from "react"
import "./cardback.css"
const CardBack = ({item}) => {
  return (
    <>
            <ul>
                {item.options.map((a) => {
                    return <li className="lists" key={a}>{a}</li>;
                })}
            </ul>
    </>
  )
}

export default CardBack;