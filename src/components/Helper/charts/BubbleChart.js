import React from 'react'
import { Bubble } from 'react-chartjs-2'
function BubbleChart() {
    const data = {
        labels: ["Expense", "Savings", "Income"],
        datasets: [
            {
                label: 'Amount this month',
                data: [{
                    x: 20,
                    y: 30,
                    r: 10
                }, {
                    x: 40,
                    y: 10,
                    r: 10
                },
                {
                    x: 25,
                    y: 20,
                    r: 30
                }],
                backgroundColor: ['rgba(220, 109, 132, 0.2)'],

                borderColor: 'rgb(75, 192, 192)',

            }]
    }
    return (
        <div>
            <Bubble
                data={data}
            ></Bubble>
        </div>
    )
}

export default BubbleChart
