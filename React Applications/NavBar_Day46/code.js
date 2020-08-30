import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import NavBar from './components/navbar';
import Map from './components/Map';
import Shop from './components/Shop';


function App() {
  return (
    <div className="App"> 
    <NavBar/>
    <Router>
      <Switch>
      <Route path="/shop" component={Shop}/>
      <Route path="/movie" component={Map}/>
      <Route path="/props" component={()=><Displayprop name = "Wire-Us"/>} />
      </Switch>
    </Router>

    </div>
  );
}

export default App;
