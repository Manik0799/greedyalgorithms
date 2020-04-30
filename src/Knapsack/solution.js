import React, {useState} from "react";

function Solution(props){

    const dataArray =new Array();
    const maxWeight= props.maxWeight;

    for(let i=0;i<props.mainData.length;i++){
        let pwratio= props.mainData[i].value1/props.mainData[i].value2;

        let obj= {ratio: pwratio, index: i};
        
        dataArray.push(obj);
    }
    dataArray.sort((a,b) => (a.ratio > b.ratio) ? 1 : -1);
    // console.log(dataArray);

    let ans= new Array(dataArray.length).fill(0);
    // console.log(ans);



    // Main Code
    function getSolution(){
        let w=0;
        

        for(let i=dataArray.length-1; i>=0; i--){

            let obj= dataArray[i];

            let path= obj.index;

            let weightvalue= props.mainData[path].value2;
            let profitvalue= props.mainData[path].value1;
            weightvalue= parseInt(weightvalue);

            if( w + weightvalue < maxWeight){

                ans[path]= 1*weightvalue;
                w+= weightvalue;

            } else{
                ans[path]= ((maxWeight-w)/ weightvalue)* weightvalue;
                w= maxWeight;
                break;
            }
        }

    }
    

    return (
        <div id="knapsacksolution">
            <h1 style={{borderBottom: "2px solid black"}}>Solution : </h1>
            <br></br>
            <h3>Max weight : {props.maxWeight}</h3>
            {getSolution()}

            <h3>Weights to pick of respective items : </h3>
            {ans.map( item => <h3>{item} kg</h3>)}

        </div>
        

    )
}

export default Solution;