import React from "react"
import ItemsList from "./ItemsList"

const Content = ({items, handleCheck, handleClick}) => {
    

  return (
    <>
        {(items.length) ?(
        <ItemsList 
        items = {items}
        handleCheck = {handleCheck}
        handleClick = {handleClick}
        />
        ):(
            <p>Your List is empty</p>
        )}
      
        
    </>
  )
}

export default Content