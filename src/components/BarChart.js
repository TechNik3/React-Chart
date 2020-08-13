



import React from 'react';
import {Bar} from 'react-chartjs-2';
import Inputs from './inputs';


function BarChart()
{
const data={

    labels: [1,2,3,4,5,6,7],
    datasets:[
        {
            label: "# visits before purchase",
            data: [231,201,114,82,92,87,250],
            bordercolor:['rgba (63,121,70,0.8)','rgb (63,121,70,0.8)','rgb (63,121,70,0.8)','rgb (63,121,70,0.8)'],
            backgroundColor:['#1efdc1','#1efdc1','#1efdc1','#1efdc1','#1efdc1']
        },

        {

            label: "Employee contributions",
            data:[10,30,50,50,80]

        }
    ]
}


    return(
            <Bar data={data} />

    )


}
export default BarChart