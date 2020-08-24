import React ,{ Component }  from 'react';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            cakes : 10,
            icecreams : 20
            
        }
        this.addClick = this.addClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
    }

    addClick(event){
        const { target: { name } } = event;
        this.setState(prevState => {
            if(prevState[name]>=1){
                return {[name] : prevState[name] - 1}
            }
            return prevState;
        });   
    }   

    deleteClick(event){
        const { target: { name } } = event;
        this.setState(prevState => {
            if(prevState[name]>=1){
                return {[name] : prevState[name] + 1}
            }
            return prevState;
        });
    }
    render(){
        return(
            <div>   
                <h2>Welcome to Bakers !!</h2>
                 <h3> Available number of cakes: {this.state.cakes} </h3> 
                 <button name= "cakes" onClick={this.addClick}>Add</button>
                 <button name= "cakes" onClick={this.deleteClick}>Delete</button>
                 <h3>Available number of icecreams: {this.state.icecreams}</h3>
                 <button name= "icecreams" onClick={this.addClick}>Add</button>
                 <button name= "icecreams" onClick={this.deleteClick}>Delete</button>
            </div>
        );
    }
}
export default Shop;
