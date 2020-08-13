
import React from 'react';
import {Line} from 'react-chartjs-2';

function LineChart()
{
const data={

    labels: [1,2,3,4,5,6,8],
    datasets:[
        {
            label: "# visits before purchase",
            data: [231,201,114,82,92,87,250],
            borderColor:['rgba(248, 0, 0, 0.2)'],
            backgroundColor:['#1efdc1'],
            pointBackgroundColor:'rgba(248, 0, 0, 1)',
            pointBorderColor:'rgba(248, 0, 0, 1)'
            

        },

        {

            label: "# Customers",
            data:[250,292,114,82,92,201,231],
            borderColor:['rgba(248, 0, 0, 0.2)'],
            backgroundColor:['pink'],
            pointBackgroundColor:'rgba(248, 0, 0, 1)',
            pointBorderColor:'rgba(248, 0, 0, 1)'

        }
    ]
}

    return(
            <Line data={data}/>

    )


}
export default LineChart