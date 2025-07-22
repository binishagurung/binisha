import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Userdetails from './Day6/Userdetails';
import Layout from './Layout';
import Home from './Day6/Home';
import Viewuser from './Day6/Viewuser';
import Filenotfound from './Filenotfound';
import Todo from './Day8/Todo';
import CompleteForm from './Day9/CompleteForm';
export default function Path() {
  return (
    <Routes>
      <Route path='*'element={<Filenotfound/>}/>
        <Route path="/"element={<Layout/>}>
            <Route index element={<Home/>}/> 
            <Route path="/userlist" element={<Viewuser/>}/>   
             <Route path="/userDetails/:id"element={<Userdetails/>}/> 
             {/*Day 8 Routes */} 
             <Route path='/Day8/Todo'element={Todo}/>
             <Route path='/Day9/Complete_form'element={<CompleteForm/>}/>
   </Route>
    </Routes>
  )
}