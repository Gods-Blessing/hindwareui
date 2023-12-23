'use client'
import { PaddedDiv } from '@/commoncomponent/commoncomponents'
import { MediScreens } from '@/constants/MediaScreen'
import { COLORS } from '@/constants/colors'
import { FONTS } from '@/constants/fonts'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Chart1 from '../Chart1/Chart1'
import Chart2 from '../Chart2/Chart2'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomePageContainer = styled.div`
  background-color: ${COLORS.color2};
`


const InputDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
  margin-bottom: 30px;
  &>div{
    display: flex;
    /* width: 125px; */
    height: 31px;
    padding: 8px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.Grayish_2};
    &>label{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      &>p{
        font-family: ${FONTS.font1};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${COLORS.Grayish_1};
      }
      
    }
    &>input{
      display: block;
    }
  }
  @media screen and (max-width: ${MediScreens.Mobile}) {
    justify-content: space-between;
  }
`


// Cards
const CardContainer = styled.div`
  display: flex;
  /* width: 1166px; */
  align-items: flex-start;
  gap: 24px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &>div{
    width: 273px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--TD-Border, #EDEBEB);
    background: var(--white, #FFF);
    display: flex;
  }

  @media screen and (max-width: ${MediScreens.Mobile}) {
    &>div{
      width: 100%;
    }
  }
`
const ColoredDiv = styled.div<{ $backgroundColor?: string; }>`
  width: 60px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$backgroundColor && props.$backgroundColor };
  border-radius: 3px 0px 0px 3px;
`

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0px 0px 0px 10px;
  &>p:first-child{
    color: ${COLORS.Grayish_1};
    font-family: ${FONTS.font1};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &>p:last-child{
    color: ${COLORS.color3};
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const ChartsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 25px;

  &>div:first-child{
    flex: 2;
  }
  &>div:last-child{
    flex: 1;
  }

  @media screen and (max-width: ${MediScreens.Tab}) {
    flex-direction: column;
  }
`



// Recodings div
const TableAndDataContainer = styled.div`
  margin-top: 31px;
  background-color: ${COLORS.white};
  /* border-radius: 18px 18px 0px 0px; */
  border-radius: 8px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.05);

  &>div:first-child{
    padding: 13px 10px;
    border-bottom: 1px solid ${COLORS.Grayish_2};
    background: var(--white, #FFF);
    border-radius: 8px 8px 0px 0px;
    font-family: ${FONTS.font1};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &>div:last-child{
    padding: 15px;
  }
`

const TableContainer = styled.div`
  overflow: scroll;
  border: 1px solid ${COLORS.Grayish_2};
  &::-webkit-scrollbar {
    display: none;
  }
  
  &>table{
    width: 100%;
    border-collapse: collapse;

    &>tr{
      border-top: 1px solid ${COLORS.Grayish_2};

      &>th{
        height: 35px;
        color: ${COLORS.black};
        background-color: ${COLORS.Grayish_2};
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0px 40px;
        border: 1px solid ${COLORS.Grayish_2};
        white-space: nowrap;
      }
      &>td{
        padding: 10px;
        text-align: center;
        /* margin-right: 20px; */
        color: #38454A;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`

const TdsSmallText = styled.span`
  color: #38454A;
  font-family: ${FONTS.font1};
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SearchInput = styled.input`
  padding: 8px 10px;
  margin-bottom: 15px;
  border: 1px solid var(--TD-Border, #EDEBEB);
  background: var(--white, #FFF);
`

const ContentTobeShown = {
  cards:[
    {
      color:COLORS.CardColor1_rgba,
      img:'/speaker_volume_icon_1.svg',
      heading:'Total Audios',
      count:'500'
    },
    {
      color:COLORS.CardColor2_rgba,
      img:'/play_icon_1.svg',
      heading:'Processed Audios',
      count:'242'
    },
    {
      color:COLORS.CardColor3_rgba,
      img:'/hourglass_office_icon_1.svg',
      heading:'Unprocessed Audios',
      count:'258'
    },
    {
      color:COLORS.CardColor4_rgba,
      img:'/feedback_report_icon_1.svg',
      heading:'Complaints',
      count:'02'
    },
  ]
}



function HomePage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  return (
    <HomePageContainer>
      <PaddedDiv>
        <div>
        {/* ======================= Date inputs ================= */}
          <InputDateContainer>
            <div>
              <label htmlFor="fromdate" >
                <p>FROM</p>
                {/* <Image width={18} height={18}  src='/calendaricon.svg' alt='calendar'/> */}
              </label>
              <input type="date" name="" id="fromdate" />
              {/* <DatePicker
                showIcon
                selected={startDate}
                onChange={(date:any) => setStartDate(date)}
              /> */}
            </div>

            <div>
              <label htmlFor="todate">
                <p>TO</p>
                {/* <Image width={18} height={18}  src='/calendaricon.svg' alt='calendar'/> */}
              </label>
              <input type="date" name="" id="todate" />
              {/* <DatePicker
                showIcon
                selected={endDate}
                onChange={(date:any) => setendDate(date)}
              /> */}
            </div>
          </InputDateContainer>


          {/* ========== Cards ==================== */}
          <CardContainer>
            {
              ContentTobeShown.cards.map((cardData, idx)=>{
                return(
                    <div key={`cardData-${idx}`}>
                      <ColoredDiv $backgroundColor={cardData.color}>
                        <Image width={25} height={25} src={cardData.img} alt='cardimage'/>
                      </ColoredDiv>
                      <CardTextContainer><p>{cardData.heading}</p> <p>{cardData.count}</p></CardTextContainer>
                    </div>
                )
              })
            }
          </CardContainer>

          {/* =============== Graph Container ===================*/}
          <ChartsContainer>
            {/* Graph 1 */}
            <div>
              <Chart1/>
            </div>

            {/* Graph 2 */}
            <div>
              <Chart2/>
            </div>
          </ChartsContainer>

          {/* =============== Recodings ================= */}
          <TableAndDataContainer>
            <div>Recording</div>
            <div>
              <SearchInput type="text" placeholder='Search...'/>

              <TableContainer>
                <table>
                  <tr>
                    <th>Sl No.</th>
                    <th>Date</th>
                    <th>Audio</th>
                    <th>Transcript</th>
                    <th>Executive</th>
                    <th>Product</th>
                    <th>Tone</th>
                    <th>CallType</th>
                  </tr>

                  <tr>
                    <td>01</td>
                    <td>01-12-2023</td>
                    <td>REC-0111111.mp3</td>
                    <td>Lorem Ipsum is simply .... <TdsSmallText>see more</TdsSmallText></td>
                    <td>John Doe</td>
                    <td>Gyser</td>
                    <td>Soft</td>
                    <td>Query</td>
                  </tr>

                  <tr>
                    <td>01</td>
                    <td>01-12-2023</td>
                    <td>REC-0111111.mp3</td>
                    <td>Lorem Ipsum is simply .... <TdsSmallText>see more</TdsSmallText></td>
                    <td>John Doe</td>
                    <td>Gyser</td>
                    <td>Soft</td>
                    <td>Query</td>
                  </tr>

                  <tr>
                    <td>01</td>
                    <td>01-12-2023</td>
                    <td>REC-0111111.mp3</td>
                    <td>Lorem Ipsum is simply .... <TdsSmallText>see more</TdsSmallText></td>
                    <td>John Doe</td>
                    <td>Gyser</td>
                    <td>Soft</td>
                    <td>Query</td>
                  </tr>

                  <tr>
                    <td>01</td>
                    <td>01-12-2023</td>
                    <td>REC-0111111.mp3</td>
                    <td>Lorem Ipsum is simply .... <TdsSmallText>see more</TdsSmallText></td>
                    <td>John Doe</td>
                    <td>Gyser</td>
                    <td>Soft</td>
                    <td>Query</td>
                  </tr>

                  <tr>
                    <td>01</td>
                    <td>01-12-2023</td>
                    <td>REC-0111111.mp3</td>
                    <td>Lorem Ipsum is simply .... <TdsSmallText>see more</TdsSmallText></td>
                    <td>John Doe</td>
                    <td>Gyser</td>
                    <td>Soft</td>
                    <td>Query</td>
                  </tr>
                </table>

              </TableContainer>
            </div>
          </TableAndDataContainer>

        </div>
      </PaddedDiv>
    </HomePageContainer>
  )
}

export default HomePage