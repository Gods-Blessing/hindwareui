'use client'
import React, { useEffect, useRef, useState } from 'react'
// cls
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddingForCharts } from '@/commoncomponent/commoncomponents';
import { FONTS } from '@/constants/fonts';
// import ReactApexChart from 'react-apexcharts';
  //import faker from 'faker';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

  

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

function Chart1() {
    const [theData, setMyData] = useState('')
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


    useEffect(()=>{
      setMyData('heyy')
    }, [])
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
                <div id="chart">
                  {
                    (typeof window !== 'undefined') &&
                    <>
                      {/* @ts-ignore */}
                      <ReactApexChart options={myData.options} series={myData.series} type="bar" height={350} />
                    </>
                  }
                </div>
            </PaddingForCharts>
        </div>
        <div></div>
    </ChartContainer>
  )
}

export default Chart1