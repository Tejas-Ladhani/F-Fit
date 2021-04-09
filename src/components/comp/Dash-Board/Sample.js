import React from 'react'
import { Pie, chart } from '@iftek/react-chartjs-3'

const data = {
  labels: ['stocks', 'Mutual funds', 'Gold', 'Green'],
  datasets: [
    {
      
      data: [12, 19, 5, 2],
      backgroundColor: [

        'rgb(176,224,230)',

        
        '	rgb(0,0,128)',
        'rgb(0,191,255)',
        '	rgb(25,25,112)'
      ],
      borderColor: [
        'rgb(65,105,225)',
        'rgb(0,0,139)',
        '	rgb(0,0,128)',
        '	rgb(25,25,112)'
      ],
      borderWidth: 1,
    },
  ],
}

function Sample() {
  return (
    <div >

      <Pie data={data} />
    </div>
  )
}

export default Sample

