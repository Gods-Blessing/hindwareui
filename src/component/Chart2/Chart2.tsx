'use client'
import React, { useEffect, useState } from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddedDiv, PaddingForCharts } from '@/commoncomponent/commoncomponents';


// using RECHARTS
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import ReactApexChart from 'react-apexcharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLOR = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const PieChartContainer = styled.div`
    background-color: ${COLORS.white};
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--TD-Border, #EDEBEB);
    background: var(--white, #FFF);
    /* card-shadow */
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);

    &>div:not(:last-child){
        border-bottom: 1px solid var(--TD-Border, #EDEBEB);
    }
`

const TotalCallsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const TotalCallsCount = styled.span`
    color: #38454A;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const TotalCallCountText = styled.span`
    color: #38454A;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const ApexPieChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`
// ChartJS.register(ArcElement, Tooltip, Legend);
// export const data = {
//   labels: ['Red', 'Blue'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19,],
//       backgroundColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
        
//       ],
//     //   borderColor: [
//     //     'rgba(255, 99, 132, 1)',
//     //     'rgba(54, 162, 235, 1)',
        
//     //   ],
//       borderWidth: 0,
//     },
//   ],
// };




function Chart2() {
    const [temp, setTemp] = useState();
    const myData = {
        series: [44, 55],
            options: {
              chart: {
                width: 200,
                height:200,
                type: 'pie',
              },
              labels: ['Team A', 'Team B'],
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -10,
                  }, 
                }
              },
              
              legend: {
                position: 'bottom',
                // fontSize: '10px',
                // fontWeight: 600,
            },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              },
              {
                breakpoint: 1500,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }
            ]
            },
        }

    return (
    <PieChartContainer>
        <div>
            <PaddingForCharts>
                <ChartsHeading>
                    <p>Complaint VS Query</p>
                </ChartsHeading>
            </PaddingForCharts>
        </div>
        <div>
            <PaddingForCharts>
                <ApexPieChartContainer>
                    {/* <div id="chart"> */}
                      {/* @ts-ignore */}
                        <ReactApexChart options={myData.options} series={myData.series} type="pie" width={380} />
                    {/* </div> */}
                </ApexPieChartContainer>

                <TotalCallsContainer>
                    <TotalCallsCount>258</TotalCallsCount>
                    <TotalCallCountText>Total Calls</TotalCallCountText>
                </TotalCallsContainer>
            </PaddingForCharts>
        </div>

    </PieChartContainer>
  )
}

export default Chart2