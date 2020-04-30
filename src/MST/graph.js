import React , { useEffect, useRef } from "react";
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';

function Graph(props){

    const domNode = useRef(null);

    // A reference to the vis network instance
    const network = useRef(null);

// Node Data
    const tempNode=[];
    for(let i=0;i<props.n;i++){
        let obj= {id: i, label: "Node "+i}
        tempNode.push(obj)
    }

    const nodes= new DataSet([...tempNode]);

// Edge Data
    const tempEdges=[];
    (props.data).forEach(d => {
        let obj= {from : d[0], to: d[1]};
        tempEdges.push(obj);
    });
    
    const edges= new DataSet([...tempEdges]);


    const data = {
        nodes: nodes,
        edges: edges
      };
      const options = {};


        useEffect(
        () => {
        network.current = new Network(domNode.current, data, options);
        },
        [domNode, network, data, options]
    );

    return (
        
        <div className= "canvas">
            <div ref = { domNode } style={{height: "370px" , border :"1px solid black", borderRadius: "10px"}} />
            <br></br>

        </div>
        

        
        
    );
}

export default Graph;