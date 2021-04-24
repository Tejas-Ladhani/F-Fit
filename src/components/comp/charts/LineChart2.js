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
                            backgroundColor:[ 'rgb(0, 255, 0,0.7)'],
                            borderColor: 'rgb(0, 245, 1)',
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