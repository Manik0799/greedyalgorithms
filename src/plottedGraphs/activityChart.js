import React from "react";
import {Line} from 'react-chartjs-2';


function TaskChart(){
    var chartData= {
        labels: ["n=40000", "n=120000", "n=240000", "n=480000"],
        datasets: [{
        label: "Activity Selection - O(N logN)",
        fill: false,
        backgroundColor: '#263145',
        borderColor: '#263145',
        data: [0.0015, 0.0021,0.0032,0.0042],
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

export default TaskChart;