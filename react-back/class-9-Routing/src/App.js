import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Rounter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/header/Home';
import Contact from './components/header/Contact';
import Login from './components/header/Login'
import Employees from './components/header/Employees';
import About from './components/header/About'

let App =()=>{
    return <div>
                <Rounter future={{ v7_relativeSplatPath: true }}>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                                <Link to="/home" className="navbar-brand">Routing</Link>
                                <div className="ml-auto">
                                    <ul className="navbar-nav">
                                        <li><Link to="/home" className="nav-link">Home</Link></li>
                                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                                        <li><Link to="/about" className="nav-link">About</Link></li>
                                        <li><Link to="/employees" className="nav-link">Employees</Link></li>
                                        <li><Link to="/login" className="nav-link">Login</Link></li>
                                    </ul>
                                </div>
                    </nav>
                    <Routes>
                        <Route path="/"  element={<Home/>}/>
                        <Route path="/home"  element={<Home/>}/>
                        <Route path="/contact"  element={<Contact/>}/>
                        <Route path="/employees"  element={<Employees/>}/>
                        <Route path="/login"  element={<Login/>}/>
                        <Route path="/about"  element={<About/>}/>
                    </Routes>

                </Rounter>
            </div>
}
export default App;