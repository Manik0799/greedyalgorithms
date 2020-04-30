import React from "react";
import jsgraphs from "js-graph-algorithms";

function DijkstraSolution(props){

    let numberOfNodes= parseInt(props.nodeCount);



    var g = new jsgraphs.WeightedDiGraph(numberOfNodes);


    (props.mainData).forEach(NodeRelation => {
        
        let start= parseInt(NodeRelation.startNode);
        let end= parseInt(NodeRelation.endNode);
        let cost= parseInt(NodeRelation.cost);


        // Creation of Edge
        g.addEdge(new jsgraphs.Edge(start, end, cost));
    });



    let source= parseInt(props.data[0].source);
    let dest= parseInt(props.data[0].destination);


    // Start Node for algorithm
    var dijkstra = new jsgraphs.Dijkstra(g, source);

    // End Node
    var v= dest;
    var path;


    if(dijkstra.hasPathTo(v)){
        path= dijkstra.pathTo(v);
    }

    function printPath(p){

        return(
            <h4>{p.from()}  ➜  {p.to()} : Cost= {p.weight}</h4>
        )
    }






    return(
        <div>
            <div style={{marginTop: "10px"}}>

                <h3>Source Node : {source}</h3>
                <h3>Destination Node : {dest}</h3>

            </div>
            <br></br>
            <h3><b>Path : </b> </h3>

            {dijkstra.hasPathTo(v) ? path.map(printPath) : <h4>No Path Found</h4>}
            {dijkstra.hasPathTo(v) ? <h4><b>Total Cost : </b>  {dijkstra.distanceTo(v)}</h4>: null}
            
            
        </div>
    )
}

export default DijkstraSolution;