import React ,{ Component }  from 'react';

class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            cakes : 10,
            icecreams : 20,
            cakesPurchased : 0,
            icecreamsPurchased :0
        };
        this.addClick = this.addClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
    }

    addClick(event){
        const { target: { name } } = event;
        const pur = event.target.name + "Purchased";
        this.setState(prevState => {
            if(prevState[name]>=1){
                return {
                    [name] : prevState[name] - 1,
                    [pur] : prevState[pur] + 1
                }
            }
            return prevState;
        });   
    }   

    deleteClick(event){
        const { target: { name } } = event;
        const pur = event.target.name + "Purchased";
        this.setState(prevState => {
            if(prevState[name]>=0 && prevState[pur]>=1){
                return {
                    [name] : prevState[name] + 1,
                    [pur] : prevState[pur] - 1
                }
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
                <button name= "icecreams" onClick={this.deleteClick}>Delete</button>
                <button name= "icecreams" onClick={this.addClick}>Add</button>

                <h3> Items Purchased !! </h3>
                <p>No of Cakes purchased : {this.state.cakesPurchased} </p>
                <p>No of Icecreams purchased : {this.state.icecreamsPurchased}</p>
            </div>
        );
    }
}
export default Shop;

