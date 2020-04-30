import React from "react";
import data from "../data/card-data";
import SolutionMSt from "./main";

function MST(){
    return(
        <div>
            <div className= "container">
            <h1 className="problem-heading">Minimum Cost Spanning Tree</h1>
            <h3 style={{marginTop: "20px" , fontWeight: "550"}}>Time Complexity : O( (V+E) logV)</h3>
            <p className= "problem-desc">{data[1].description} The algorithm used is Prim's Algorithm to calculate the minimum cost spanning tree.</p>

            <p className= "problem-desc"><b>Instructions:</b> For undirected edge between Node 1 and Node 2 , <b>Fill only in one of the inputs.</b>.</p>
            </div>
            <SolutionMSt />
        </div>
    )
}

export default MST;