import React from 'react'

const Footer = ({length}) => {
    

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-sky-500 text-center h-10">
          {length} List {(length === 1) ? "item" : "items" }
    </footer>
  )
}

export default Footer