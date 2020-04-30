import React, {useState} from "react";
import DijkstraSolution from "./solution";


function Solution(){

    const [fields, setFields] = useState([{ startNode: null, endNode: null, cost: null}]);
    const [solution, setSolution]= useState(false);
    const [numberOfNodes, setNumber]= useState(null);
    // For source and destination nodes
    const [algoData, setAlgoData]= useState([{source: null, destination: null}])
  

    function handleStartNode(i, event) {

        if(solution){
            setSolution(false);
        }
      const values = [...fields];
      values[i].startNode = event.target.value;
      setFields(values);
    }

    function handleEndNode(i, event){
        if(solution){
            setSolution(false);
        }
        const values = [...fields];
        values[i].endNode = event.target.value;
        setFields(values);
    }

    function handleEdgeWeight(i, event){
        if(solution){
            setSolution(false);
        }
        const values = [...fields];
        values[i].cost = event.target.value;
        setFields(values);
    }

    function handleNumberOfNode(event){
        if(solution){
            setSolution(false);
        }

        const number= event.target.value;

        setNumber(number);

         
    }

    function handleSource(event){
        if(solution){
            setSolution(false);
        }

        const values = [...algoData];
        values[0].source = event.target.value;
        setAlgoData(values);
    }

    function handleDestination(event){
        if(solution){
            setSolution(false);
        }
        const values = [...algoData];
        values[0].destination = event.target.value;
        setAlgoData(values);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ startNode: null, endNode: null });
      setFields(values);
    }
  
    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }

    function getSolution(){
                
        setSolution(true);
    }

  
    return (

      <div className="container form" style={{marginTop: "20px"}}>
      <div className= "row">
          <div className= "col-lg-6">

                <br></br>

               

                <input
                    style={{marginTop: "10px"}}
                    type="number"
                    value= {numberOfNodes}
                    placeholder= "Number of Nodes"
                    onChange= {e => handleNumberOfNode(e)}
                ></input>
                <br></br>

                <input
                    style={{marginTop: "10px"}}
                    type="number"
                    value= {algoData.source}
                    placeholder= "Source Node"
                    onChange= {e => handleSource(e)}
                ></input>
                <input
                    style={{marginLeft: "8px", marginTop: "10px"}}
                    type="number"
                    value= {algoData.destination}
                    placeholder= "Destination Node"
                    onChange= {e => handleDestination(e)}
                ></input>


                <h2>Valid node Labels: 0 to {numberOfNodes-1}</h2>

                <button type="button" className="btn btn-primary addbtn" onClick={() => handleAdd()}>
                Add Node Relation
                </button>
        
                {fields.map((field, idx) => {
                return (
                    <div key={`${field}-${idx}`} className= "inputs">
                    <input
                        type="number" 
                        value={field.startNode} 
                        placeholder="Start Node" 
                        onChange={e => handleStartNode(idx, e)}
                    />
                    <input style={{marginLeft: "10px"}}
                        type="number" 
                        value={field.endNode} 
                        placeholder="End Node" 
                        onChange={e => handleEndNode(idx, e)}
                    />
                    <input style={{marginLeft: "5px"}}
                        type="number" 
                        value={field.cost} 
                        placeholder="Cost" 
                        onChange={e => handleEdgeWeight(idx, e)}
                    />

                    <button type="button" className= "btn btn-primary removebtn" onClick={() => handleRemove(idx)}>
                        Delete 
                    </button>
                    </div>
                );
                })}
                <br></br>

                {/* Get the Solution button */}
                <button 
                className="btn btn-primary" 
                style={{marginTop: "10px", backgroundColor: "#263145"}}
                onClick={() => getSolution()}
                >
                Get Solution
                </button>
          </div>

          <div className= "col-lg-6">
            {/* Rendering solution component based on the value of solution variable */}
            {solution ?
            <DijkstraSolution 
                mainData = {[...fields]}
                nodeCount= {numberOfNodes}
                data= {[...algoData]}
                />
            : null}

          </div>
      </div>
  
        
      </div>
    );
}


export default Solution;