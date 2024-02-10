import React from "react"
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleClick}) => {
  return (
    <li className="flex justify-between overflow-hidden box-border border-2 border-black mt-4 p-4 gap-x-2">
        <input
            type = "checkbox"
            onChange={() => handleCheck(item.id)}
            checked = {item.checked}
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 border border-gray-300 rounded-md"
        />
        <label
            style={(item.checked)?{textDecoration : 'line-through'}:null}
            onDoubleClick={()=> handleCheck(item.id)}
            className="text-lg"
        >{item.itemName}</label>
        <FaTrashAlt 
            role = "button"
            onClick={()=>handleClick(item.id)}
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        />
    </li>
  )
}

export default LineItem