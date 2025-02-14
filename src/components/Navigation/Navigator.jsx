import {Link} from  "react-router-dom";

const Navigator = () => {
    return (
        <nav className="navbar"> 
            <Link to="/" className="nav-link">Landing</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dictionary" className="nav-link">Dictionary</Link>
           
            
        </nav>
    )
}

export default Navigator;