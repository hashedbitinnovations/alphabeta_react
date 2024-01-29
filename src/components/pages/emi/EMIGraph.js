import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMIGraph = (props) => {
    const { interest, amount } = props;


    const data = {
        labels: ['Loan Amount', 'Interest'],
        datasets: [
          {
            // label: ['Amount', 'Int'],
            data: [amount, interest],
            backgroundColor: ['#3300dd', '#aa0022'],
          }
        ]
      };


    return (
        <div>
            <Pie data={data}/>

        </div>
    )
}

export default EMIGraph
