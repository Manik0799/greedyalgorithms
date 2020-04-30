import React from "react";

function Solution(props){

    let dataArray= [...props.mainData];

    for(let i=0;i<dataArray.length;i++){

        dataArray[i].starttime= parseInt(dataArray[i].starttime);
        
        dataArray[i].endtime= parseInt(dataArray[i].endtime);
    }
    
    dataArray.sort((a,b) => (a.endtime > b.endtime) ? 1 : -1);
    // console.log(dataArray);

    let total_activities= 1;
    let ans= [];


    function getSolution(){

        let k=0;
        ans.push(dataArray[0]);
        
        for(let i=1; i<dataArray.length; i++){

            let endtime= dataArray[k].endtime;

            if( dataArray[i].starttime >= endtime){
                k=i;
                ans.push(dataArray[i]);
                total_activities++;
            }

        }

    }

    return(
        <div>
            <h2 style={{borderBottom : "1px solid black"}}>Solution : </h2>
            {getSolution()}

            <h3>Maximum Activities possible : {total_activities}</h3>
            <h3>Activities : </h3>
            <br></br>
            {ans.map(activity => <h4>Time : {activity.starttime} to {activity.endtime}</h4>)}
        </div>
    )
}

export default Solution;