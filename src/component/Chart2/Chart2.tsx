'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddedDiv, PaddingForCharts } from '@/commoncomponent/commoncomponents';

// import ReactApexChart from 'react-apexcharts';
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
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const TotalCallCountText = styled.span`
    color: ${COLORS.color1};
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



function Chart2() {
    const [temp, setTemp] = useState();
    const myData = {
        series: [220, 38],
            options: {
              chart: {
                width: 200,
                height:200,
                type: 'pie',
              },
              labels: ['Soft', 'Hard'],
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -10,
                  }, 
                }
              },
              tooltip: {
                fixed: {
                  enabled: true,
                  position: 'topRight',
                  offsetX: 0,
                  offsetY: 0,
                },
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
                    <p>Tone Quality</p>
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
                        <ReactApexChart options={myData.options} series={myData.series} type="pie" width={300} />
                      </>
                    }
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