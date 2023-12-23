import React, { useEffect, useRef, useState } from 'react'
// cls
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddingForCharts } from '@/commoncomponent/commoncomponents';
import { FONTS } from '@/constants/fonts';
import ReactApexChart from 'react-apexcharts';
  //import faker from 'faker';
  

// Css
const ChartContainer = styled.div`
    background-color: ${COLORS.white};
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



const DurationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    &>div{
        font-family: ${FONTS.font1};
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        background-color: rgba(133, 97, 205, 0.3);
        color: rgba(133, 97, 205, 1);
        padding: 2px 7px;
        border-radius: 3px;
    }
`


//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   );
  
//   export const options = {
//     plugins: {
//       title: {
//         display: false,
//         text: 'Complaint VS Query',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: true,
//     interaction: {
//       mode: 'index' as const,
//       intersect: false,
//     },
//     scales: {
//       x: {
//         stacked: false,
//       },
//       y: {
//         stacked: false,
//       },
//     },
//   };
  
//   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
//   export const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => Math.floor(Math.random()* 1001)),
//         backgroundColor: 'rgb(255, 99, 132)',
//         stack: 'Stack 0',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => Math.floor(Math.random()* 1001)),
//         backgroundColor: 'rgb(75, 192, 192)',
//         stack: 'Stack 1',
//       },
//       {
//         label: 'Dataset 3',
//         data: labels.map(() => Math.floor(Math.random()* 1001)),
//         backgroundColor: 'rgb(53, 162, 235)',
//         stack: 'Stack 2',
//       },
//     ],
//   };


function Chart1() {
    // const [myData, setMyData] = useState()
    const myData = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: true,
                tools:{
                  download:false
                }
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: 'Query'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val:any) {
                  return "Quadra " + val + " thousands"
                }
              }
            }
          },
    }

  return (
    <ChartContainer>
        <div>
            <PaddingForCharts>
                <ChartsHeading>
                    <p>Complaint VS Query</p>

                    <DurationContainer>
                        <div> ALL </div>
                        <div> 1M </div>
                        <div> 6M </div>
                        <div> 1Y </div>
                    </DurationContainer>
                </ChartsHeading>
            </PaddingForCharts>
        </div>

        <div>
            <PaddingForCharts>
                {/* <div> */}
                    {/* <Bar updateMode='active' redraw={true} options={options} data={data} /> */}
                {/* </div> */}
                <div id="chart">
                    <ReactApexChart options={myData.options} series={myData.series} type="bar" height={350} />
                </div>
            </PaddingForCharts>
        </div>
        <div></div>
    </ChartContainer>
  )
}

export default Chart1