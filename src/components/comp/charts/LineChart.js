import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart(props) {
    console.log(props);
    console.log(props.amount);
    console.log(props.date);
    return (
        <>
            <Line
                data={{
                    labels: props.date,
                    datasets: [
                        {
                            label: 'Savings',
                            data: props.amount,
                            backgroundColor:[ 'rgb(80, 192, 192,0.6)'],
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
