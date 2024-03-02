import React,{useState} from "react";


function Counterfunction(){

var [number, setNumber]= useState(0)

function increment(){
    setNumber(number+1)
}

return(
    <div>
   <h1>counter = {number}</h1>
   <button onClick={increment}>increment</button>
   </div>
)


}

export default  Counterfunction;