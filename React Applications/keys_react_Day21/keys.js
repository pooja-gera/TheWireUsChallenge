import React from 'react';   
import ReactDOM from 'react-dom';   
  
function ListItem(props) {  
  const item = props.item;  
  return (  
    // No need to specify the key here.  
    <li> {item} </li>  
  );  
}  
function NameList(props) {  
  const myLists = props.myLists;  
  const listItems = myLists.map((strLists) =>  
    // The key should have been specified here.  
    <ListItem key={myLists.toString()} item={strLists} />  
  );  
  return (  
    <div>  
        <h2>Correct Key Usage Example</h2>  
            <ol>{listItems}</ol>  
    </div>  
  );  
}  
const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];  
ReactDOM.render(  
  <NameList myLists={myLists}/>,  
  document.getElementById('app')  
);  
export default App;  