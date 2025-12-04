import React from 'react'
import Message from './components/message/Message'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './static/css/bs.css'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  

    return <React.Fragment>
            <Navbar/>
            <Message/>
            </React.Fragment>
}

export default App