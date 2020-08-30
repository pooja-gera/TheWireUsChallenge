import React ,{ Component }  from 'react';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            cakes : 10,
            icecreams : 20
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const { target: { name } } = event;
        this.setState(prevState => {
            if(prevState[name]>=1){
                return {[name] : prevState[name] - 1}
            }
            return prevState;
        });
    }   
    
    render(){
        return(
            <div>   
                <h2>Welcome to Bakers !!</h2>
                <h3> Available number of cakes: {this.state.cakes} </h3> 
                <button name= "cakes" onClick={this.handleClick}>Add</button>
                <h3>Available number of icecreams: {this.state.icecreams}</h3>
                <button name= "icecreams" onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}
export default Shop;

