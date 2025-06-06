import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {useState} from 'react'
import ToDo from "./ToDo/ToDo";

function App(){
   
   return (
    <div className="container">
    <h1>To-Do List Manager</h1>
    <ToDo/>
    </div>
);
   
}

export default App