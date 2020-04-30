import React from "react";
import {Line} from 'react-chartjs-2';


function HuffChart(){
    var chartData= {
        labels: ["n=20000", "n=80000", "n=160000", "n=320000"],
        datasets: [{
        label: "Huffmann Coding - O(N logN)",
        fill: false,
        backgroundColor: '#263145',
        borderColor: '#263145',
        data: [0.001, 0.0017,0.0025,0.0032],
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

export default HuffChart;