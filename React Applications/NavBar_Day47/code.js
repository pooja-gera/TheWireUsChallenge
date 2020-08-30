import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import NavBar from './components/navbar';
import Map from './components/Map';
import Shop from './components/Shop';
import Displayprop from './components/Displayprop';

const Page404=()=>{
  return (  
    <h3>Oops - Reached to 404 page</h3>
  );
}


function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <Router>
      <Switch>
        <Route path="/shop" component={Shop}/>
        <Route path="/movie" component={Map}/>
        <Route path="/props" component={()=><Displayprop name = "Wire-Us"/>} />
        <Route component={Page404}/>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
