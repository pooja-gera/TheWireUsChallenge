import React ,{ Component }  from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link, BrowserRouter as Router, withRouter} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <nav>
                <h3>Navbar</h3>
                <ul className="nav-links">
                    <li>Movies</li>
                    <li>Shop</li>
                </ul> 
            </nav>
        );
    }
}
export default NavBar;

