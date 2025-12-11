let Navbar = ()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/home" className="navbar-brand">Routing</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><a href="/home" className="nav-link">Home</a></li>
                    <li><a href="/contact" className="nav-link">Contact</a></li>
                    <li><a href="/login" className="nav-link">Login</a></li>
                </ul>
            </div>
            </nav>
}
export default Navbar;