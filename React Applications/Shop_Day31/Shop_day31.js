import React ,{ Component }  from 'react';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            cakes : 10,
            icecreams : 20
        }
    }
    render(){
        return(
            <div>   
                <h2>Welcome to Bakers !!</h2>
                <h3> Available number of cakes: {this.state.cakes} </h3> 
                <button>Add</button>
                <h3>Available number of cakes: {this.state.icecreams}</h3>
                <button>Add</button>
            </div>
        );
    }
}
export default Shop;

