import React from 'react'
import { Bar } from 'react-chartjs-2'
function BarChart() {
    return (
        <div className="BChart">
            <Bar
                data={
                    {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [
                            {
                                label: "no of votes",
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: ['rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)']
                            },
                            {
                                label: "no of",
                                data: [22, 9, 31, 15, 12, 3],
                                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)']
                            }
                        ]
                    }}
                height={400}
                // width={'40vw'}

                options={{
                    maintainAspectRatio: false,
                }}


            ></Bar>
        </div>
    )
}

export default BarChart
