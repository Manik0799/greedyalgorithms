import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
       
        <header>
     
            <Link to ="/">
                <p >Greedy Techniques</p> 
            </Link>

            <div className="tabs container row">
            {/* <Link to ="/">
                <button className= "btn btn-primary">Single Source</button>
            </Link>
            <Link to ="/">
                <button className= "btn btn-primary">Task Scheduling</button>
            </Link>
            <Link to ="/">
                <button className= "btn btn-primary">Huffmann</button>
            </Link>
            <Link to ="/">
                <button className= "btn btn-primary">Spanning Tree</button>
            </Link>
            <Link to ="/">
                <button className= "btn btn-primary">Knapsack</button>
            </Link> */}

            </div>
           

        </header>
       

        

        

      




    )
}

export default Header;