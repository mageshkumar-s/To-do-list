import React from "react"


const SearchItem = ({Search, setSearch}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}
    className="box-border border-2 border-black justify-items-center lg:p-6 md:p-6 sm:p-2"
    >
      <div>
        <label htmlFor="search" className="sr-only">Search</label>
          <input 
              id="search"
              role="searchbox"
              placeholder="Search Items"
              type="text"
              value={Search}
              onChange={(e)=> setSearch(e.target.value)}
              className="border-2 border-black-500 bg-gray-100 hover:border-sky-500 lg:w-72 md:w-64 lg:p-4 md:p-2.5 sm:p-2"
          />
      </div>
    </form>
  )
}

export default SearchItem