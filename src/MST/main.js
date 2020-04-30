import React, {useState} from "react";
import Solution from "./solution";

function SolutionMST(){

    const [fields, setFields] = useState([{ startNode: null, endNode: null, edgeWeight: null}]);
    const [solution, setSolution]= useState(false);
    const [numberOfNodes, setNumber]= useState(1);
  

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
        values[i].edgeWeight = event.target.value;
        setFields(values);
    }

    function handleNumberOfNode(event){

        
        const number= event.target.value;

        if(solution){
            setSolution(false);
        }

         if(number===null){
             setNumber(0);
         } else{
            setNumber(number);

         }
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

            
                <h3>Number of Nodes</h3>

                <input
                    style={{marginTop: "10px"}}
                    type="number"
                    value= {numberOfNodes}
                    placeholder= "Number of Nodes"
                    onChange= {e => handleNumberOfNode(e)}
                ></input>

                <h3>Valid Node Labels: 0 to {numberOfNodes-1}</h3>

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
                        value={field.edgeWeight} 
                        placeholder="Edge Weight" 
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
           <Solution 
            mainData = {[...fields]}
            nodeCount= {numberOfNodes}
            />
          : null}

          </div>
      </div>
  
        
      </div>
    );
}

export default SolutionMST;