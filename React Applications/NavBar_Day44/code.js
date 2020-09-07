import React ,{ Component }  from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link, BrowserRouter as Router, withRouter} from "react-router-dom";

class NavBar extends Component{
    render(){
        const navStyle = {
            color : "white"
        }
        return(
            <Router>
            <nav>
                <h3>Navbar</h3>
                <ul className="nav-links">
                    <li><Link to="/movie" style={navStyle}>Movies</Link></li>
                    <li><Link to="/shop" style={navStyle}>Shop</Link></li>
                </ul> 
            </nav>
            </Router>
        );
    }
}
export default NavBar;

