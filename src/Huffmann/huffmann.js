import React from "react";
import data from "../data/card-data";
import SolutionHuffmann from "./main";

function Huffmann(){
    return(
        <div>
            <div className= "container">
            <h1 className="problem-heading">Huffmann encoding</h1>
            <h3 style={{marginTop: "20px" , fontWeight: "550"}}>Time Complexity : O(NlogN)</h3>
            <p className= "problem-desc">{data[2].description}</p>
            </div>

            <SolutionHuffmann />

        </div>
        
        
    )
}

export default Huffmann;