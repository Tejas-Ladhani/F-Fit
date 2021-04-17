import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function PiChart() {
    return (
        <div>
            <Doughnut
             data={{labels:['Red','Blue','Yellow','Green','Purple','Orange'],
             datasets:[
                 {
                     label:"no of votes",
                     data:[12,19,3,5,2,3],
                     backgroundColor:[ 'rgba(255, 99, 132, 0.7)',
                     'rgba(54, 162, 235, 0.7)',
                     'rgba(255, 206, 86, 0.7)',
                     'rgba(75, 192, 192, 0.7)',
                     'rgba(153, 102, 255, 0.7)',
                     'rgba(255, 159, 64, 0.7)']
                 },] 
               
                
                }
                }
               
            >

            </Doughnut>

        </div>
    )
}

export default PiChart
