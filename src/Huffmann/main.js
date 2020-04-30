import React, {useState} from "react";
import Solution from "./solution";


function SolutionHuffmann(){

    const [text, setText]= useState(null);
    const [solution, setSolution]= useState(false);
    
    function handleTextChange(event) {
        
        const newtext= event.target.value;
        if(solution){
            setSolution(false);
        }
            setText(newtext);

    }

    function getSolution(e){

        setSolution(!solution);
    }

    return(
        
            <div className= "container gettext">
            <div className= "row">
                <div className= "col-lg-6">
                <h2>Enter text to encode : </h2>
                    <textarea 
                        id="userText" 
                        rows="4" 
                        cols="50"
                        value= {text}
                        onChange= {e => handleTextChange(e)}
                    >
                    </textarea>

                    <p></p>
                    <button 
                        className="btn btn-primary" 
                        style={{marginTop: "10px", backgroundColor: "#263145"}}
                        onClick={() => getSolution()}
                        >
                        Encode
                    </button>
                      

                </div>

                <div className= "col-lg-6">
                    {/* Rendering solution component based on the value of solution variable */}
                        {solution ?
                        <Solution 
                            data = {text}
                        />
                        : null}
                </div>

                
                
            </div>


            

            </div>
   
        
        
    )
}

export default SolutionHuffmann;