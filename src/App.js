import React from 'react';
import './App.css';
import { useState } from 'react';
import Item from "./Item";

function App() {
  const [items,setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  return (
    <div className="App">
        <h1> To Do List</h1>
        <input value={newItem} placeholder="enter text here" onChange={e => setNewItem(e.target.value)}/>
        <button onClick={() => {setItems([...items, newItem]);setNewItem("")}}> add </button>
        <Item entries={items}/>
    </div>
  );
}

export default App;
