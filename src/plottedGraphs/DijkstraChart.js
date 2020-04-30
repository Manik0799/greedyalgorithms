import React from "react";
import {Line} from 'react-chartjs-2';


function DijkstraChart(){
    var chartData= {
        labels: ["n", "n", "n", "n"],
        datasets: [{
        label: "Single Source Shortest Path - O((V+E) logV)",
        fill: false,
        backgroundColor: '#f6376d',
        borderColor: '#f6376d',
        data: [0.0019, 0.0028,0.0043,0.0058],
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

export default DijkstraChart;