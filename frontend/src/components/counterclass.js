import React from "react";

class Counterclass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this)//bind function
        //sate define
        this.state = {
            number:0
        }
    }

    increment(){
        this.setState({
            number:this.state.number + 1
        })
    }


    render(){
        return(
         <div>
            <h1>counter = {this.state.number}</h1>
            <button onClick={this.increment}>Increment</button>
         </div>
        )
            
        
    }
}


export default Counterclass;