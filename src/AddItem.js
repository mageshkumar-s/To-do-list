import React from "react"
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
 
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}
    className="box-border border-2 border-black justify-items-center md:p-2.5 sm:p-2"
    >
        <label htmlFor='addItem' className="sr-only">Add Item</label>
        <div className="flex gap-4 p-6 md:p-4 sm:p-2">
          <input 
              autoFocus
              type="text"
              id = 'addItem'
              placeholder="Add Item"
              required
              ref={inputRef}
              // while data entering event user type their data. it will take and update to backend
              value={newItem}
              onChange = {(e) => setNewItem(e.target.value)}
              className="border-2 border-black-500 bg-gray-100 hover:border-sky-500 lg:p-4 md:p-2.5 sm:p-2"
          />
          <button 
              type="submit"
              aria-label="Add Item" 
              onClick={()=>inputRef.current.autoFocus}
              className="border-2 border-black-500 bg-gray-100 hover:border-sky-500 lg:p-4 md:p-2.5 sm:p-2 "  
          >
              <FaPlus />
          </button>
        </div>
        
    </form>
  )
}

export default AddItem