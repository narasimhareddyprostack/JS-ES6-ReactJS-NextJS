import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './navbar/Navbar';
import ContactApp from './contactapp/ContactApp';
import ContactList from './contactapp/ContactList';
import ContactDetails from './contactapp/ContactDetails';
import Home from './contactapp/Home'

const App = () => {
  return <div>
          <Router>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/contacts" element={<ContactApp/>}/>
              </Routes>
          </Router>
        </div>
}

export default App