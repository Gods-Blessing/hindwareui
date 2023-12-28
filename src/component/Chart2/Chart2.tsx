import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddedDiv, PaddingForCharts } from '@/commoncomponent/commoncomponents';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


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
    color: ${COLORS.color1};
    /* font-family: Inter; */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const TotalCallCountText = styled.span`
    color: ${COLORS.color1};
    /* font-family: Inter; */
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



const myData = {
  series: [264665, 52642, 212023],
      options: {
        chart: {
          width: 200,
          height:200,
          type: 'pie',
        },
        labels: ['Total Audios', 'Transcribed Audios', 'Unprocessed Audios'],
        colors:['#49A3A1', '#DC3545', '#dcce35'],
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
        // {
        //   breakpoint: 1500,
        //   options: {
        //     chart: {
        //       width: 300
        //     },
        //     legend: {
        //       position: 'bottom'
        //     }
        //   }
        // }
      ]
      },
  }


function Chart2({chartData}:any){
  console.log(chartData);
  
  const [temp, setTemp] = useState(myData);
  const [options, setOptions] = useState([0, 0, 0]);
  const [series, setSeries] = useState(["-", "-", "-"])

  console.log("temp => ", temp)
  
  
  useEffect(()=>{
    // console.log(temp);
    // let chartinfo = {...temp}
    // console.log("chartInfo ==>", chartinfo);
    
    // // chartinfo.series.push(chartData[data]
    // chartinfo.series = [chartData['total_audios'],chartData['transcripted_audios'], chartData['unprocessed_audios']]
    // chartinfo.options.labels = ["boom", "hames", "games"]
    // // Object.keys(chartData).map((data)=> console.log(chartData[data]))
    // // Object.keys(chartData).map((data)=> chartinfo.options.labels.push(chartData[data]))
    // setTemp(chartinfo)
  }, [])


  return (
    <PieChartContainer>
        <div>
            <PaddingForCharts>
                <ChartsHeading>
                    <p>Audios</p>
                </ChartsHeading>
            </PaddingForCharts>
        </div>
        <div>
            <PaddingForCharts>
                <ApexPieChartContainer>
                  {/* <div id="chart"> */}
                    {
                      (typeof window !== 'undefined') &&
                      <>
                        {/* @ts-ignore */}
                        <ReactApexChart options={temp.options} series={temp.series} type="pie" width={"100%"} />
                      </>
                    }
                  {/* </div> */}
                </ApexPieChartContainer>

                <TotalCallsContainer>
                    <TotalCallsCount>{chartData.transcripted_audios}</TotalCallsCount>
                    <TotalCallCountText>Transcribed Audios</TotalCallCountText>
                </TotalCallsContainer>
            </PaddingForCharts>
        </div>
    </PieChartContainer>
  )
}

export default Chart2