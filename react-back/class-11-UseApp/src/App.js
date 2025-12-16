import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './navbar/Navbar';
import UserApp from './user/UserApp';
import UserList from './user/UserList';
import UserDetails from './user/UserDetails';
import Home from './user/Home'

const App = () => {
  return <div>
          <Router>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/users" element={<UserApp/>}/>
              </Routes>
          </Router>
        </div>
}

export default App