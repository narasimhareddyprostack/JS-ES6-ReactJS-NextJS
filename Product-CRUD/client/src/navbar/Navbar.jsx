import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/index" className='navbar-brand'>Product CRUD</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/admin" className='nav-link'>Admin</Link></li>
                    <li><Link to="/products" className='nav-link'>Products</Link></li>
                </ul>
            </div>
        </nav>
        </React.Fragment>
}

export default Navbar