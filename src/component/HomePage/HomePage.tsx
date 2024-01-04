'use client'
import { LoaderContainer, PaddedDiv, TopBottomPadding } from '@/commoncomponent/commoncomponents'
import { MediScreens } from '@/constants/MediaScreen'
import { COLORS } from '@/constants/colors'
import { FONTS } from '@/constants/fonts'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Chart1 from '../Chart1/Chart1'
import Chart2 from '../Chart2/Chart2'
import { GetData } from '@/network'
// import { APIS } from '@/network/AllApis'
import PopOver from './Popover/PopOver'
import { numberWithCommasCustom } from '@/utilities/helper'
import { Puff, RotatingLines, ThreeCircles } from 'react-loader-spinner'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const HomePageContainer = styled.div`
  background-color: ${COLORS.color2};
`

// Cards
const CardContainer = styled.div`
  display: flex;
  /* width: 1166px; */
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &>div{
    /* width: 273px; */
    flex: 1;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${COLORS.Grayish_2};
    background: ${COLORS.white};
    display: flex;
  }

  @media screen and (max-width: ${MediScreens.Mobile}) {
    &>div{
      /* width: 100%; */
      /* flex: 1; */
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
  border-radius: 8px 0px 0px 8px;
`

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0px 10px 0px 10px;
  &>p:first-child{
    color: ${COLORS.Grayish_1};
    /* font-family: ${FONTS.font1}; */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
  }

  &>p:last-child{
    color: ${COLORS.color3};
    /* font-family: Inter; */
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
    background: ${COLORS.white};
    border-radius: 8px 8px 0px 0px;
    /* font-family: ${FONTS.font1}; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &>div:last-child{
    padding: 15px;
  }
`

const InputDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
  margin: 30px 0px;
  &>div{
    display: flex;
    /* width: 125px; */
    /* height: 31px; */
    padding: 8px 10px;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.Grayish_2};
    gap: 20px;
    border-radius: 8px;
    &>label{
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* width: 100%; */
      &>p{
        /* font-family: ${FONTS.font1}; */
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: ${COLORS.Grayish_1};
      }
      
    }
    input{
      /* justify-self: stretch; */
      /* background-color: orange; */
      border: none;
      border-bottom: 1px solid ${COLORS.Grayish_1};
      position: relative;

      &:focus{
        outline: none;
      }
    }
  }
  @media screen and (max-width: ${MediScreens.Mobile}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    &>div{
      width: 100%;
    }
  }
`

const TableContainer = styled.div`
  overflow: scroll;
  /* min-height: 250px; */
  border: 1px solid ${COLORS.Grayish_2};
  &::-webkit-scrollbar {
    display: none;
  }
  
  &>table{
    width: 100%;
    border-collapse: collapse;

    &>tr:not(:first-child){
      &:hover{
        background-color: ${COLORS.Grayish_2_rgb};
      }
    }

    &>tr{
      border-top: 1px solid ${COLORS.Grayish_2};

      &>th{
        height: 35px;
        color: ${COLORS.black};
        background-color: ${COLORS.Grayish_2};
        /* font-family: Inter; */
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
        color: ${COLORS.color1};
        /* font-family: Inter; */
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`

const TdsSmallText = styled.span`
  color: ${COLORS.color1};
  /* font-family: ${FONTS.font1}; */
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  color: blue;
`

const SearchInput = styled.input`
  padding: 8px 10px;
  margin-bottom: 15px;
  border: 1px solid ${COLORS.Grayish_2};
  background: ${COLORS.white};
`

// for pagination
const PaginationContainer = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>p{
    color: var(--Border, #393945);
    /* font-family: Inter; */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (max-width: ${MediScreens.Mobile}) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

const PaginationNoContainer = styled.div`
  display: flex;
  align-items: center;
  &>div{
    display: flex;
    align-items: center;
    border: 1px solid ${COLORS.Grayish_2};
    /* font-family: Inter; */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    user-select: none;
  }
  &>div:not(:nth-child(2)){
    padding: 8px 10px;
  }
  &>div:nth-child(2){
    max-width: 80px;
    overflow: auto;
    display: flex;
    &::-webkit-scrollbar {
      display: none;
    }
    &>div:first-child{
      border-left: none;
    }
    &>div{
      padding: 8px 10px;
      border-collapse: collapse;
      border-left: 1px solid ${COLORS.Grayish_2};
    }
  }
`
const PaginationNumbers = styled.div<{ $active?: any, $myState?:any}>`
  background-color: ${props => props.$active == props.$myState ? COLORS.yellow : COLORS.white};
`


const ContentTobeShown = {
  cards:[
    {
      color:COLORS.CardColor1_rgba,
      img:'/speaker_volume_icon_1.svg',
      heading:'Total Audios',
      count:0
    },
    {
      color:COLORS.CardColor2_rgba,
      img:'/play_icon_1.svg',
      heading:'Transcribed Audios',
      count:0
    },
    {
      color:COLORS.CardColor4_rgba,
      img:'/feedback_report_icon_1.svg',
      heading:'Categorized',
      count:0
    },
    {
      color:COLORS.CardColor3_rgba,
      img:'/hourglass_office_icon_1.svg',
      heading:'Unprocessed Audios',
      count:0
    },
  ]
}




function HomePage() {
  const [page, setpage] = useState(1);
  const [cardsData, setCardsData] = useState(ContentTobeShown.cards);
  const [transcriptData, setTranscriptData] = useState<any>([]);
  const [showTranscriptionPopup, setShowTranscriptionPopup] = useState(false);
  const [popOverData, setPopOverData] = useState('');
  const [entries, setEntries] = useState({start:1, end:15})
  const [chart2Data, setChart2Data] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loader, setLoader] = useState(false);
  const [pagi, setPagi] = useState([]);

  const HandlePopOverData = (data:any)=>{
    document.body.style.overflow = 'hidden';
    setPopOverData(data);
    setShowTranscriptionPopup(true);
  }

  const HandleClosePopOver = ()=>{
    document.body.style.overflow = 'scroll';
    setShowTranscriptionPopup(false)
  }

  const HandlePageIncrease = ()=>{
    if(page < cardsData[1].count){
      setpage(page + 1);
    }
  }

  const HandlePageDecrease = ()=>{
    if(page >1){
      setpage(page - 1);
    }
  }

  const HandleSetPageNo = (pageNo:any)=>{
    console.log(pageNo);
    setpage(pageNo)
    console.log(entries);
  }

  useEffect(()=>{
    document.getElementById(`id-${page}`)?.scrollIntoView()
    let newEntry = {start:(15*page) - 14, end:15*page}
    setEntries(newEntry)
  }, [page])

  // GETTING THE BUY PRICE OF GOLD & SILVER 
  const GettingAlltheLivePrice = (promisedata:any)=> Promise.all(promisedata)
    .then((responses)=>{
        const data1 = responses[0];
        const data2 = responses[1];
        if(data1){
          let CopiedArr = [...cardsData];
          CopiedArr[0].count = data1.total_audios;
          CopiedArr[1].count = data1.transcripted_audios;
          CopiedArr[2].count = data1.categorized_audios;
          CopiedArr[3].count = data1.unprocessed_audios;
          // CopiedArr[1].livePrice.price = data2.totalAmount;
          setCardsData(CopiedArr)
          setChart2Data(data1)
          // console.log("data1 =>", data1);
          setLoader(false);
        }
        
        if(data2){
          setTranscriptData(data2)
          // console.log("data2 =>", data2);
        }
    })
    .catch(()=>{
      
  })



  const GettingTransciptionData = (promisedata:any)=> Promise.all(promisedata)
    .then((responses)=>{
        const data1 = responses[0];
        if(data1){
          setTranscriptData(data1)
          // console.log("data1 =>", data1);
          setLoader(false);
        }
    })
    .catch((error)=>{
      console.log(error);
  })

  useEffect(()=>{
    setLoader(true);
    GettingAlltheLivePrice([GetData(process.env.NEXT_PUBLIC_GENERALAPI), GetData(process.env.NEXT_PUBLIC_AUDIO_TRANSACTIONS)]);
  }, []);

  useEffect(()=>{
    setLoader(true);
    GettingTransciptionData([GetData(`${process.env.NEXT_PUBLIC_AUDIO_TRANSACTIONS}?page=${page}`)]);
  }, [page]);
  
  useEffect(() => {
    const performHeavyCalculation = async () => {
      // pages calculation logic here
      // delay with setTimeout
      const heavyResult = await new Promise((resolve) => {
        setTimeout(() => {
          const elemnt = Array.from({length: (cardsData[1].count/15)}, (_, idx)=>(
            <PaginationNumbers onClick={()=>HandleSetPageNo(idx + 1)} key={`page-${idx}`} id={`id-${idx + 1}`} $active={idx + 1} $myState={page}>{idx + 1}</PaginationNumbers>
          ))
          resolve(elemnt); // returning actual heavy computation
        }, 1000);
      });
      // @ts-ignore
      setPagi(heavyResult);
    };
    // Call calculation function here
    performHeavyCalculation();
  }, [page]);

  useEffect(()=>{
    setLoader(true)
    // console.log("date changed");
    const TodaysDate = new Date();
    let tdsDate = `${TodaysDate.getFullYear()}-${TodaysDate.getMonth()}-${TodaysDate.getDate()}`
    // console.log("tdsdate=> ",new Date(tdsDate).getTime());
    let strDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
    let strDatep = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`

    // console.log("strtdate=> ",(strDate));
    let edDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
    let edDatep = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`


    if((new Date(tdsDate).getTime() > new Date(strDate).getTime()) && (strDate!= null && endDate != null)){
      GettingTransciptionData([GetData(`${process.env.NEXT_PUBLIC_AUDIO_TRANSACTIONS}?start_date=${strDatep}&end_date=${edDatep}`)]);
    }else{
      GettingTransciptionData([GetData(`${process.env.NEXT_PUBLIC_AUDIO_TRANSACTIONS}?page=${page}`)]);
    }

  }, [page, startDate, endDate]);


  return (
    <HomePageContainer>
      <PaddedDiv>
        <TopBottomPadding>
          <div>
            {/* ========== Cards ==================== */}
            <CardContainer>
              {
                ContentTobeShown?.cards?.map((cardData, idx)=>{
                  return(
                      <div key={`cardData-${idx}`}>
                        <ColoredDiv $backgroundColor={cardData.color}>
                          <Image width={25} height={25} src={cardData.img} alt='cardimage'/>
                        </ColoredDiv>
                        <CardTextContainer><p>{cardData.heading}</p> <p>{numberWithCommasCustom(cardData.count)}</p></CardTextContainer>
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
                <Chart2 chartData={chart2Data}/>
              </div>
            </ChartsContainer>

            {/* =============== Recodings ================= */}
            <TableAndDataContainer>
              <div>Recording</div>
              <div>
                <SearchInput type="text" placeholder='Search...'/>
                <InputDateContainer>
                  <div>
                    <label htmlFor="fromdate" >
                      <p>FROM</p>
                      {/* <Image width={18} height={18}  src='/calendaricon.svg' alt='calendar'/> */}
                    </label>
                    {/* <input type="date" name="" id="fromdate" /> */}
                    <DatePicker
                      id="fromdate"
                      selected={startDate}
                      onChange={(date:any) => setStartDate(date)}
                      maxDate={new Date()}
                    />
                  </div>

                  <div>
                    <label htmlFor="todate">
                      <p>TO</p>
                      {/* <Image width={18} height={18}  src='/calendaricon.svg' alt='calendar'/> */}
                    </label>
                    {/* <input type="date" name="" id="todate" /> */}
                    <DatePicker
                      id="todate"
                      selected={endDate}
                      onChange={(date:any) => setEndDate(date)}
                      maxDate={new Date()}
                    />
                  </div>
                </InputDateContainer>

                <TableContainer>
                {
                    loader ?
                      <LoaderContainer>
                        <ThreeCircles
                          visible={true}
                          height="95"
                          width="95"
                          color="#4fa94d"
                          ariaLabel="three-circles-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </LoaderContainer>
                      :
                      <table>

                        <tr>
                          {
                            transcriptData.length > 0 && <th>Sl No.</th>
                          }
                          {
                            transcriptData.length > 0 &&
                            Object.keys(transcriptData[0]).map((data, idx)=>{
                              return(
                                <>
                                {
                                  data != 'timestamp_included' &&
                                  <th key={`th-heading-${idx}`}>
                                    {
                                      data.replace(/_/g, ' ').toLocaleUpperCase()
                                    }
                                  </th>
                                }
                                </>
                              )
                            })
                          }
                          {/* <th>Date</th>
                          <th>Audio</th>
                          <th>Transcript</th>
                          <th>Executive</th>
                          <th>Product</th>
                          <th>Tone</th>
                          <th>CallType</th> */}
                        </tr>

                        {
                          transcriptData.length > 0 ?
                          transcriptData.map((data:any, idx:any)=>{
                            return(
                              <tr key={`tr-${idx}`}>
                                <td>{entries.start + idx}</td>
                                <td>{data?.agent_id}</td>
                                {/* <td>{data?.created_at}</td> */}
                                <td>{data?.date_time}</td>
                                <td>{data?.filename}</td>
                                <td>{data?.inbound_outbound}</td>
                                <td>{data?.phone_number}</td>
                                <td>{data?.transcription ? 
                                  <>
                                    {
                                      <>
                                        {data?.transcription.substring(0,15)}...<TdsSmallText onClick={()=>HandlePopOverData(data?.transcription)}>see more</TdsSmallText>
                                      </>
                                    }
                                  </>
                                  :
                                  <>No Data</>
                                  }
                                </td>
                                {/* <td>{data?.updated_at}</td> */}
                              </tr>
                            )
                          })
                          :
                          <LoaderContainer>NO DATA</LoaderContainer>
                        }

                        {showTranscriptionPopup && <PopOver popOverData={popOverData} HandleClosePopOver={HandleClosePopOver} />}
                      </table>
                  }
                </TableContainer>

                <PaginationContainer>
                    {/* <p>Showing {entries.start} to {entries.end} of {cardsData[1].count} entries</p> */}

                    <PaginationNoContainer>
                      <div onClick={HandlePageDecrease}>Prev</div>
                      <div>
                        {/* {
                          ContentTobeShown.cards.map((data, idx)=>{
                            return(
                              <>
                              <PaginationNumbers onClick={()=>HandleSetPageNo(idx + 1)} key={`page-${idx}`} id={`id-${idx + 1}`} $active={idx + 1} $myState={page}>{idx + 1}</PaginationNumbers>
                              </>
                            )
                          })
                        } */}

                        {
                         pagi 
                        }
                      </div>
                      <div onClick={HandlePageIncrease}>Next</div>
                    </PaginationNoContainer>
                  </PaginationContainer>
              </div>
            </TableAndDataContainer>

          </div>
        </TopBottomPadding>
      </PaddedDiv>
    </HomePageContainer>
  )
}

export default HomePage