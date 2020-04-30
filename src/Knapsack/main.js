import React, {useState} from "react";
import Solution from "./solution";

function SolutionKnapsack(){

    const [fields, setFields] = useState([{ value1: null, value2: null }]);
    const [maxW, setmaxW] = useState(null);
    const [solution, setSolution]= useState(false);
  

    function handleWeight(event){
        const value= event.target.value;
        setmaxW(value);
    }

    function handleChangeValue1(i, event) {
      const values = [...fields];
      values[i].value1 = event.target.value;
      setFields(values);
    }

    function handleChangeValue2(i, event){
        const values = [...fields];
        values[i].value2 = event.target.value;
        setFields(values);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ value1: null, value2: null });
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

            {/* To get the max weight of the knapsack */}
                <input type="number" placeholder="Weight of Knapsack" onChange= {e=> handleWeight(e)}></input>

                <br></br>

                <button type="button" className="btn btn-primary addbtn" onClick={() => handleAdd()}>
                Add Item
                </button>
        
                {fields.map((field, idx) => {
                return (
                    <div key={`${field}-${idx}`} className= "inputs">
                    <input
                        type="number" 
                        value={field.value1} 
                        placeholder="Enter Profit" 
                        onChange={e => handleChangeValue1(idx, e)}
                    />
                    <input style={{marginLeft: "10px"}}
                        type="number" 
                        value={field.value2} 
                        placeholder="Enter Weight" 
                        onChange={e => handleChangeValue2(idx, e)}
                    />
                    <button type="button" className= "btn btn-primary removebtn" onClick={() => handleRemove(idx)}>
                        Remove item
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
            maxWeight = {maxW}
            mainData = {[...fields]}
            />
          : null}

          </div>
      </div>
  
        
      </div>
    );

}

export default SolutionKnapsack;