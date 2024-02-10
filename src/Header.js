import React from 'react'

const Header = ({title}) => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-sky-500 font-bold text-center h-10'>
        <h1>{title}</h1>
    </header>
  ) 
}

Header.defaultProps = {
  title : "TO-DO-LIST"
}

export default Header