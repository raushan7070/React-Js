import React from 'react'
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

const Routing1 = () => {
  return (
    <div>
      {/* <h1> Routing1</h1> */}
      

      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Routing1
