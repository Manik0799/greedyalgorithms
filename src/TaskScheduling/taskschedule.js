import React from "react";
import data from "../data/card-data";
import SolutionActivity from "./main";

function TaskSchedule(){
    return(
        <div>
        <div className= "container">
        <h1 className="problem-heading">Task Scheduling / Activity Selection Problem</h1>
        <h3 style={{marginTop: "20px" , fontWeight: "550"}}>Time Complexity : O(NlogN) - Unsorted Inputs</h3>
        <p className= "problem-desc">{data[3].description}</p>
        <SolutionActivity />
        </div>
    </div>
      
    )
}

export default TaskSchedule;