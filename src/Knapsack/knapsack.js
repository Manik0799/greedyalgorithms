import React from "react";
import data from "../data/card-data";
import SolutionKnapsack from "./main";

function Knapsack(){
    return(
        <div>
            <div className= "container">
            <h1 className="problem-heading">Knapsack Problem</h1>
            <h3 style={{marginTop: "20px" , fontWeight: "550"}}>Time Complexity : O(NlogN)</h3>
            <p className= "problem-desc">{data[0].description}</p>
            </div>
            <SolutionKnapsack />
        </div>
        
        
    )
}

export default Knapsack;