import React from 'react'
import { Bar } from 'react-chartjs-2'
function BarChart(props) {
    console.log(props);
    return (
        <div className="BChart">
            <Bar
                data={
                    {
                        labels: props.expense,
                        datasets: [
                            {
                                label: "Expense",
                                data: props.expense,
                                backgroundColor: ['rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)']
                            }
                        ]
                    }}
                // height={400}
                // width={'40vw'}

                options={{
                    maintainAspectRatio: false,
                }}


            ></Bar>
        </div>
    )
}

export default BarChart
