import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart(props) {
    return (
        <>
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    datasets: [
                        {
                            label: 'no of votes',
                            data: [ 32, 50, 40, 300],
                            backgroundColor:[ 'rgb(75, 192, 192,0.6)'],
                            fill: props.colorFill,
                            borderColor: 'rgb(75, 192, 192)',
                             tension: 0.1
                            
                        }
                    ],
                 
                }}
                Axes={{display:false}}

            >
            </Line>
        </>
    )
}

export default LineChart
