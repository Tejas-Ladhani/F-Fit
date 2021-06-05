import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function PiChart(props) {

    return (
        <div>
            <Doughnut
             data={{labels:['Savings','Expense','Emergency Funds'],
             datasets:[
                 {
                     label:"no of votes",
                     data:[props.array1[2],props.array1[0],props.array1[1]],
                     backgroundColor:[ 'rgba(102, 255, 0, 0.615)',
                     'rgba(245, 0, 0, 0.5)',
                     'rgb(0, 225, 255,0.5)'
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
