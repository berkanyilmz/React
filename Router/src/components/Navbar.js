import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={'mainNav'}>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/aboutUs'} >About Us</NavLink>
            <NavLink to={'/history'} >History</NavLink>
        </nav>
    );
}

export default Navbar;