import React from "react";
import Card from "./Card";
import data from "../data/card-data";

function createCard(item){
    return (
        <Card 
            name= {item.name}
            desc= {item.description}
            link= {item.link}
        />
    )
}

function Main(){
    return(
        <div id="intro-section">
        <div class="container-fluid">
        <div class="row">
            {data.map(createCard)}
        </div>
        </div>
            
            
        </div>
    )
}

export default Main;