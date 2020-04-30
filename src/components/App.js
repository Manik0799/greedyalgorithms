import React from "react";
import Header from "./Header";
import Main from "./Main";
import Knapsack from "../Knapsack/knapsack";
import TaskSchedule from "../TaskScheduling/taskschedule";
import MST from "../MST/mst";
import Huffmann from "../Huffmann/huffmann";
import Dijkstra from "../Dijkstra/dijkstra";
import Graphs from "../plottedGraphs/graphs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App(){
    return(
        <Router>
            <div className="App">
                <Header />
                <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component= {Main}></Route>
                    <Route path="/knapsack" component= {Knapsack}></Route>
                    <Route path="/taskscheduling" component= {TaskSchedule}></Route>
                    <Route path= "/mst" component={MST}></Route>
                    <Route path= "/huffmann" component={Huffmann}></Route>
                    <Route path= "/singlesource" component= {Dijkstra}></Route>
                    <Route path="/graphs" component= {Graphs}></Route>
                </Switch>
                </div>
               
            </div>
        </Router>
        
        
    )
}

export default App;