import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content";
import React, { useEffect, useState } from 'react'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const APL_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);

const [newItem, setNewItem] = useState("");
const [search, setSearch] = useState("");
const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
   const fetchItems = async() =>{
    try{
      const response = await fetch(APL_URL);
      if(!response.ok){
        throw new Error("Data not Received");
      }
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    }catch(error){
      setFetchError(error.Message)
    }finally{
      setIsLoading(false)
    }
   }
   setTimeout(()=>{
    (async () =>await fetchItems())()
   },2000)
   
},[])

const addItem = (itemName) =>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addNewItem = {
    id,
    checked : false,
    itemName
  }
  const listItems =[...items, addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleCheck = (id) =>{
    const listItems = items.map((item) => 
    item.id === id ? {...item,checked : !item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleClick =(id) => {
    const listItems = items.filter((item)=> item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem);
  setNewItem("")
}

  return(
    <div className="h-screen flex flex-col w-screen"> 
      <Header  />
      <article
      className="flex w-screen justify-around mt-14"
      >
        <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        />
      </article>
      <article
      className="flex w-screen justify-around mt-5"
      >
        <SearchItem 
        search = {search}
        setSearch = { setSearch}
        />
      </article>
       
      <main className='flex justify-around h-screen box-border border-2 border-black m-10 mb-20'>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
        items = {items.filter(item => ((item.itemName).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleClick = {handleClick}
        />}
      </main>
      <Footer 
      length = {items.length}
      />
    </div>
  );
}

export default App;
