import React, { useEffect, useRef, useState } from 'react'
// cls
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { COLORS } from '@/constants/colors';
import { ChartsHeading, PaddingForCharts } from '@/commoncomponent/commoncomponents';
import { FONTS } from '@/constants/fonts';
import moment from 'moment';
// import ReactApexChart from 'react-apexcharts';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

  

// Css
const ChartContainer = styled.div`
    background-color: ${COLORS.white};
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${COLORS.Grayish_2};
    background: var(--white, #FFF);
    /* card-shadow */
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);

    &>div:not(:last-child){
        border-bottom: 1px solid ${COLORS.Grayish_2};
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
        cursor: pointer;
    }
`


const myData = {
    series: [{
        name: 'Complaints',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 61, 58, 63]
      }, {
        name: 'Query',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 87, 105, 91]
      }, {
        name: 'Total Calls',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 48, 52]
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
        colors:['#FAC70F','#006FAB', '#49A3A1'],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          // title: {
          //   text: ''
          // }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val:any) {
              return val + " thousands"
            }
          },
          fixed: {
            enabled: true,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
          },
        }
      },
}

function Chart1() {
  const [myDataState, setMyData] = useState(0);

  function CalculateDate(month:any){
    console.log("recent days date ==> " , moment().format('L'));
    
    if(month == '1M'){
      console.log(moment().subtract(1, 'month').calendar());
    }else if(month == '6M'){
      console.log(moment().subtract(6, 'month').calendar());
    }else if(month == '1Y'){
      console.log(moment().subtract(1, 'year').calendar());
    }
  }

  return (
    <ChartContainer>
        <div>
          <PaddingForCharts>
              <ChartsHeading>
                  <p>Complaint VS Query</p>
                  <DurationContainer>
                      <div> ALL </div>
                      <div onClick={()=>CalculateDate('1M')}> 1M </div>
                      <div onClick={()=>CalculateDate('6M')}> 6M </div>
                      <div onClick={()=>CalculateDate('1Y')}> 1Y </div>
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