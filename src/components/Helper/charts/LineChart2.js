import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart2(props) {
    return (
        <>
            <Line
                data={{
                    labels: props.array2,
                    datasets: [
                        {
                            label: 'Stock value',
                            data: props.array1,
                            backgroundColor:[ 'rgb(75, 192, 192,0.6)'],
                            borderColor: 'rgb(75, 192, 192)',
                            pointRadius: 0
                            // hoverBackgroundColor:'rgb(70, 192, 192)'
                        }
                    ],
                 
                }}
                
                Axes={{display:true}}
                
            >
            </Line>
        </>
    )
}

export default LineChart2