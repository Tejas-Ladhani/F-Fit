import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function PiChart(props) {
    console.log(props.array1);
    return (
        <div>
            <Doughnut
             data={{labels:['Savings','Expense','Emergency Funds'],
             datasets:[
                 {
                     label:"no of votes",
                     data:[props.array1[2],props.array1[0],props.array1[3]],
                     backgroundColor:[ 'rgba(102, 255, 0, 0.815)',
                     'rgba(255, 0, 0, 0.842)',
                     'rgb(0, 225, 255)'
                     ]
                 },] 
                 
                }
                }
               
            >

            </Doughnut>

        </div>
    )
}

export default PiChart
