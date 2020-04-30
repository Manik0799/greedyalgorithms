import React from "react";
import {Line} from 'react-chartjs-2';


function PrimChart(){
    var chartData= {
        labels: ["n", "n", "n", "n"],
        datasets: [{
        label: "Minimum Spanning Tree - O((V+E) logV)",
        fill: false,  
        backgroundColor: '#f6376d',
        borderColor: '#f6376d',
        data: [0.0018, 0.0029,0.0041,0.0056],
        }],
    }

    var chartOptions=  {
        legend: {
          labels:{
            fontColor: "black",
            fontSize: 16
          }
        },
          scales: {
              yAxes: [{
                  ticks: {
                    fontColor: "black",
                      beginAtZero: true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Time"
                  }
              }],
              xAxes: [{
                ticks: {
                  fontColor: "black",
                  beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: "Input Size"
                  }
              }]
          }
      }
    return(
        <div>
            <Line 
               data={chartData}
               options={chartOptions} 
            />
        </div>
    )
}

export default PrimChart;