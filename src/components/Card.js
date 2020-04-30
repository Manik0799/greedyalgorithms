import React from "react";
import {Link} from "react-router-dom";

function Card(props){

    // Dynamic Styling of cards 
    var cardStyle= {
        width : "35rem",
        height: "25rem",
        margin : "0 auto",
        backgroundColor: "#f6376d", 
        borderRadius: "10px"
    }

    var buttonStyle={
        backgroundColor: "#263145" ,
        borderRadius: "10px",
        border: "none"
    }

    if(props.name==="Graphs"){
        cardStyle.backgroundColor= "#263145";
        buttonStyle.backgroundColor= "#f6376d";
    }
    // /////////////////////////////////////////



    return(
        <div id="mycard">
            <div class="col-lg-4 col-sm-6">
                <div class="card" style={cardStyle}>

                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text" >{props.desc}</p>

                        {/* This is for routing to the specific pages on click */}
                        <Link to= {props.link}>
                        <button class="btn btn-primary " style={buttonStyle}>Go to Page</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;