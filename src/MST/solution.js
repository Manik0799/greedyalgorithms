import React from "react";
import Graph from "./graph";


function Solution(props){

    var graph= props.mainData;
    
    function createAdjMatrix(V) {
  
        var adjMatrix = [];
        
        // create N x N matrix filled with 0 edge weights between all vertices
        for (var i = 0; i < V; i++) { 
          adjMatrix.push([]);
          for (var j = 0; j < V; j++) { adjMatrix[i].push(0); }
        }
        
        // populate adjacency matrix with correct edge weights
        for (var i = 0; i < graph.length; i++) { 
          adjMatrix[graph[i].startNode][graph[i].endNode] = graph[i].edgeWeight;
          adjMatrix[graph[i].endNode][graph[i].startNode] = graph[i].edgeWeight;
        }
        
        return adjMatrix;
        
      }
      
      function prims(V) {
        
        // create adj matrix from graph
        var adjMatrix = createAdjMatrix(V);
        
        // arbitrarily choose initial vertex from graph
        var vertex = 0;
        
        // initialize empty edges array and empty MST
        var MST = [];
        var edges = [];
        var visited = [];
        var minEdge = [null,null,Infinity];
        
        // run prims algorithm until we create an MST
        // that contains every vertex from the graph
        while (MST.length !== V-1) {
          
          // mark this vertex as visited
          visited.push(vertex);
          
          // add each edge to list of potential edges
          for (var r = 0; r < V; r++) {
            if (adjMatrix[vertex][r] !== 0) { 
              edges.push([vertex,r,adjMatrix[vertex][r]]); 
            }
          }
      
          // find edge with the smallest weight to a vertex
          // that has not yet been visited
          for (var e = 0; e < edges.length; e++) {
            if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) { 
              minEdge = edges[e]; 
            }
          }
      
          // remove min weight edge from list of edges
          edges.splice(edges.indexOf(minEdge), 1);
      
          // push min edge to MST
          MST.push(minEdge);
            
          // start at new vertex and reset min edge
          vertex = minEdge[1];
          minEdge = [null,null,Infinity];
          
        }
        
        return MST;
        
      }
    
// Function call to get the solution
      var nodeCount= parseInt(props.nodeCount)
      var solutionArray= (prims(nodeCount));

      function printSolution(ans){
          return (
              <h4>
                Node {ans[0]} to {ans[1]} having edge weight {ans[2]}
              </h4>
          )
      }


    return(
        <div>
            <h2>Solution :</h2>
            <br></br>
            <h3>Number of Nodes : {props.nodeCount}</h3>
            <h3>Minimum spanning tree has the following nodes: </h3>
            <br></br>
            {solutionArray.map(printSolution)}
            <br></br>
            <br></br>
            <br></br>
            <Graph
              
              data= {solutionArray}
              n= {props.nodeCount}
            />
            
        </div>
    )
}

export default Solution;