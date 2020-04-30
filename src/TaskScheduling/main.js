import React, {useState} from "react";
import Solution from "./solution"

function SolutionActivity(){

    const [fields, setFields] = useState([{ starttime: null, endtime: null }]);
    const [solution, setSolution]= useState(false);
  

    function handleChangeStart(i, event) {
      const values = [...fields];
      values[i].starttime = event.target.value;
      setFields(values);
    }

    function handleChangeEnd(i, event){
        const values = [...fields];
        values[i].endtime = event.target.value;
        setFields(values);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ starttime: null, endtime: null });
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

                <h3>Input in 24H format</h3>
                <h3>Ex - 1:00pm is 13</h3>

                <button type="button" className="btn btn-primary addbtn" onClick={() => handleAdd()}>
                Add Activity
                </button>
        
                {fields.map((field, idx) => {
                return (
                    <div key={`${field}-${idx}`} className= "inputs">
                    <input
                        type="number" 
                        value={field.value1} 
                        placeholder="Start Time (Integer)" 
                        onChange={e => handleChangeStart(idx, e)}
                    />
                    <input style={{marginLeft: "10px"}}
                        type="number" 
                        value={field.value2} 
                        placeholder="End time (Integer)" 
                        onChange={e => handleChangeEnd(idx, e)}
                    />
                    <button type="button" className= "btn btn-primary removebtn" onClick={() => handleRemove(idx)}>
                        Remove Activity
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
            />
          : null}

          </div>
      </div>
  
        
      </div>
    );

}

export default SolutionActivity;