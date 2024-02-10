import React from "react"
import LineItem from "./LineItem";

const ItemsList = ({items, handleCheck, handleClick}) => {
  return (
    <ul>
            {items.map((item)=>(
                <LineItem 
                item = {item}
                key = {item.id}
                handleCheck = {handleCheck}
                handleClick = {handleClick}
                />
            ))}
    </ul>

  )
}

export default ItemsList