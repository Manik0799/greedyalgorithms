import React from "react";
import {Line} from 'react-chartjs-2';

function KnapChart(){


    var chartData= {
        labels: ["n=40000", "n=120000", "n=240000", "n=480000"],
        datasets: [{
        label: "Fractional Knapsack - O(N logN)",
        fill: false,
        backgroundColor: '#f6376d',
        borderColor: '#f6376d',
        data: [0.001, 0.002,0.0025,0.004],
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

export default KnapChart;