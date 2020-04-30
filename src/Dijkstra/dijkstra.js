import React from "react";
import data from "../data/card-data";
import Solution from  "./main";
import SolutionHuffmann from "../Huffmann/main";

function Dijkstra(){
    return(
        <div>
            <div className= "container">
            <h1 className="problem-heading">Single Source Shortest Path</h1>
            <h3 style={{marginTop: "20px" , fontWeight: "550"}}>Time Complexity : O((V+E) logV)</h3>
            <p className= "problem-desc">{data[4].description}</p>
            </div>

            <Solution />

        </div>
    )
}

export default Dijkstra;