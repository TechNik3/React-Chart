
import React from 'react';
import {Pie} from 'react-chartjs-2';

function PieChart()
{
const data={

    labels: [1,2,3,4,5,6,8],
    datasets:[
        {
            label: "# visits before purchase",
            data: [231,201,114],
            borderColor:['rgba(248, 0, 0, 0.2)'],
            backgroundColor:['#1efdc1','red','green'],
            

        },

        {

            label: "# Customers",
            data:[231,201,114]

        }
    ]
}

    return(
            <Pie data={data}/>

    )


}
export default PieChart