import React from "react";
import KnapChart from "./knapChart";
import TaskChart from "./activityChart";
import PrimChart from "./mstChart";
import DijkstraChart from "./DijkstraChart";
import HuffChart from "./huffmann";



// KnapChart TaskChart PrimChart DijkstraChart HuffChart
function Graphs(){
    return(
        <div className="container">
            <h1>Graphical Plots</h1>
            <br></br>
            <div className= "row">
                <div className= "col-md-6">
                    <KnapChart />
                </div>
                <div className= "col-md-6">
                    <TaskChart />
                </div>
            </div>
            <br></br>

            <div className= "row">
                <div className= "col-md-6">
                    <HuffChart />
                </div>
                <div className= "col-md-6">
                    <PrimChart />
                </div>
            </div>
            <br></br>

            <div className= "row">
                <div className= "col-md-6">
                    <DijkstraChart />
                </div>
            </div>

            
            
        </div>
    )
}

export default Graphs;