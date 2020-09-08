import React ,{ Component }  from 'react';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            items : ["cakes"=10, "icecreams"=20 ]
        }
    }
    render(){
        return(
            <div>   
                <h2>Welcome to Bakers !!</h2>
                <h3> Available number of cakes: {this.state.cakes} </h3>
                <h3>Available number of icecreams: {this.state.icecreams}</h3>
            </div>
        );
    }
}
export default Shop;

