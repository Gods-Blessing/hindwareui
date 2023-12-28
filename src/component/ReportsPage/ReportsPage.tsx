'use client'
import { LoaderContainer, PaddedDiv, TopBottomPadding } from '@/commoncomponent/commoncomponents'
import { MediScreens } from '@/constants/MediaScreen'
import { COLORS } from '@/constants/colors'
import { FONTS } from '@/constants/fonts'
import { GetData } from '@/network'
import { APIS } from '@/network/AllApis'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RotatingLines, ThreeCircles } from 'react-loader-spinner'

import styled from 'styled-components'

const ReportPageContainer = styled.div`
  background-color: ${COLORS.color2};
`

const ReportPageHeading = styled.div`
  color: ${COLORS.color1};
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    &>button{
      display: inline-flex;
      height: 28px;
      padding: 8px 15px;
      align-items: center;
      flex-shrink: 0;
      border-radius: 5px;
      border: 1px solid ${COLORS.yellow};
      background: ${COLORS.yellow};
      /* Top-Nav */
      box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.05);
    }
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
        color: #38454A;
        /* font-family: Inter; */
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        /* white-space: nowrap; */
        
      }
    }
  }
`

const TdsSmallText = styled.span`
  color: #38454A;
  /* font-family: ${FONTS.font1}; */
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SearchInput = styled.input`
  padding: 8px 10px;
  margin-bottom: 15px;
  border: 1px solid ${COLORS.Grayish_2};
  background: ${COLORS.white};
`

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

const ContentToBeShown ={
  ths:[
    'Date',
    'SKU Name',
    'Model Name',
    'Problem Type',
    'Problem Detail',
    'Agent Name',
    'Agent Tone',
    'Suggestion to Customer',
    'Suggestion to Agent',
    'Customer Name',
    'Customer Location',
    'Pincode',
    'Customer Tone',
    'Defective Part',
    'Suggestions to R&D Team',
    'RCA',
    'Proposed Resolution Based On RCA',
    'Call Score',
  ],
  trs: [
  {
    th:'Date',
    tr:{
      date:'01-12-2023',
      SKUName:'SensorArt60018',
      modelName:'Sensor Art Sensor Urinal',
      problemType:'Water Leakage',
      problemDetail:'Lorem Ipsum is simply...',
      agentName:'John Doe',
      agentTone:'Soft',
      suggestionToCustomer:'Lorem Ipsum is simply dummy text of the...',
      suggestionToAgent:'Lorem Ipsum is simply dummy text of the...',
      customerName:'Gordon Kumar',
      customerLocation:"Delhi",
      pinCode:'11058',
      customerTone:'Soft',
      defectivePart:'Sensor',
      suggestionToRnD:'Lorem Ipsum is simply dummy text of the...',
      rca:'Lorem Ipsum is simply dummy text of the...',
      proposedResolution:'Part Replacement',
      callScore:'9'
    }
  },
]
}



function ReportsPage() {
  const [page, setpage] = useState(1);
  const [reportData, setReportData] = useState<any>([]);
  const [entries, setEntries] = useState({start:1, end:15})
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loader, setLoader] = useState(false);
  const [pagi, setPagi] = useState([]);
  const [totalData, setTotalData] = useState({
                                                "categorized_audios": 0,
                                                "total_audios": 0,
                                                "transcripted_audios": 0,
                                                "unprocessed_audios": 0
                                            });

  const HandlePageIncrease = ()=>{
    if(page < ContentToBeShown.ths.length){
      setpage(page + 1);
    }
  }

  const HandlePageDecrease = ()=>{
    if(page >1){
      setpage(page - 1);
    }
  }

  const HandleSetPageNo = (pageNo:any)=>{
    setpage(pageNo)
  }

  const GettingAlltheData = (promisedata:any)=> Promise.all(promisedata)
    .then((responses)=>{
        const data1 = responses[0];
        if(data1){
          setTotalData({...data1})
          console.log("genaral data =>", data1);
          setLoader(false);
        }
    })
    .catch(()=>{
      
  })

  const GettingReportsData = (promisedata:any)=> Promise.all(promisedata)
    .then((responses)=>{
        const data1 = responses[0];
        if(data1){
          setReportData(data1)
          console.log("data1 =>", data1);
          setLoader(false)
        }
    })
    .catch((error)=>{
      console.log(error);
  })

  useEffect(()=>{
    GettingAlltheData([GetData(`${APIS.GeneralDataApi}`)])
  }, [])

  useEffect(()=>{
    document.getElementById(`id-${page}`)?.scrollIntoView()
    let newEntry = {start:(15*page) - 14, end:15*page}
    setEntries(newEntry)
  }, [page])


  useEffect(() => {
    const performHeavyCalculation = async () => {
      // Your heavy calculation logic here
      // For example, simulating a delay with setTimeout
      const heavyResult = await new Promise((resolve) => {
        setTimeout(() => {
          const elemnt = Array.from({length: (totalData.categorized_audios/15)}, (_, idx)=>(
            <PaginationNumbers onClick={()=>HandleSetPageNo(idx + 1)} key={`page-${idx}`} id={`id-${idx + 1}`} $active={idx + 1} $myState={page}>{idx + 1}</PaginationNumbers>
          ))
          resolve(elemnt); // Replace this with your actual heavy computation
        }, 1000);
      });
      // @ts-ignore
      setPagi(heavyResult);
    };
    // Call your heavy calculation function here
    performHeavyCalculation();
  }, [page]);



  useEffect(()=>{
    setLoader(true)
    // console.log("date changed");
    const TodaysDate = new Date();
    let tdsDate = `${TodaysDate.getFullYear()}-${TodaysDate.getMonth()}-${TodaysDate.getDate()}`
    // console.log("tdsdate=> ",new Date(tdsDate).getTime());
    let strDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
    // console.log("strtdate=> ",(strDate));
    let edDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`


    if((new Date(tdsDate).getTime() > new Date(strDate).getTime()) && (strDate!= null && endDate != null)){
      GettingReportsData([GetData(`${APIS.CategorizedTranscription}?page=${page}&start_date=${strDate}&end_date=${edDate}`)]);
    }else{
      GettingReportsData([GetData(`${APIS.CategorizedTranscription}?page=${page}`)]);
    }

  }, [page, startDate, endDate]);


  return (
    <ReportPageContainer>
      <PaddedDiv>
        <TopBottomPadding>
          <ReportPageHeading>Reports</ReportPageHeading>

            {/* ======================= Date inputs ================= */}
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
                  />
                </div>
            </InputDateContainer>

            <TableAndDataContainer>
                <div>
                  Recording
                  <button>
                    Download
                  </button>
                </div>

                <div>
                  <SearchInput type="text" placeholder='Search...'/>

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
                            reportData.length > 0 &&
                            Object.keys(reportData[0]).map((data, idx)=>{
                              return(
                                <th key={`th-heading-${idx}`}>
                                  {
                                    data.replace(/_/g, ' ').toLocaleUpperCase()
                                  }
                                </th>
                              )
                            })
                          }
                            {/* {
                              ContentToBeShown.ths.map((ths, idx)=>{
                                return(
                                  <th key={`th-${idx}`}>{ths}</th>
                                )
                              })
                            } */}
                          </tr>

                          <>
                          {
                            reportData.length > 0 ?
                            reportData.map((trs:any, idx:any)=>{
                              // console.log(idx);
                              
                              return(
                                <tr key={`tr-${idx}`}>
                                  <td>{trs.agent_name ? trs.agent_name: "NA"}</td>
                                  <td>{trs.agent_tone ? trs.agent_tone:"NA"}</td>
                                  <td>{trs.call_score ? trs.call_score:"NA"}</td>
                                  {/* <td>{trs.created_at}</td> */}
                                  <td>{trs.customer_location ? trs.customer_location:"NA"}</td>
                                  <td>{trs.customer_name ? trs.customer_name:"NA"}</td>
                                  <td>{trs.customer_tone ? trs.customer_tone:"NA"}</td>
                                  <td>{trs.date_of_conversation ? trs.date_of_conversation:"NA"}</td>
                                  <td>{trs.filename ? trs.filename : "NA"}</td>
                                  {/* <td>{trs.id}</td> */}
                                  <td>{trs.identified_defective_part ? trs.identified_defective_part:"NA"}</td>
                                  <td>{trs.model_name ? trs.model_name:"NA"}</td>
                                  <td>{trs.pin_code ? trs.pin_code:"NA"}</td>
                                  <td>{trs.problem_details ? trs.problem_details:"NA"}</td>
                                  <td>{trs.problem_type ? trs.problem_type : "NA"}</td>
                                  <td>{trs.proposed_resolution ? trs.proposed_resolution:"NA"}</td>
                                  <td>{trs.root_cause_analysis ? trs.root_cause_analysis :"NA"}</td>
                                  <td>{trs.sku_name ? trs.sku_name : "NA"}</td>
                                  <td>{trs.suggestion_to_agent_by_system ? trs.suggestion_to_agent_by_system : "NA"}</td>
                                  <td>{trs.suggestions_by_agent ? trs.suggestions_by_agent : "NA"}</td>
                                  <td>{trs.suggestions_to_rnd_team ? trs.suggestions_to_rnd_team : "NA"}</td>
                                  {/* <td>{trs.updated_at}</td> */}
                                </tr>
                                )
                              })
                              :
                              <LoaderContainer>NO DATA</LoaderContainer>
                            }
                          </>
                        </table>
                    }
                  </TableContainer>

                  <PaginationContainer>
                    {/* @ts-ignore */}
                    <p>Showing {entries.start} to {entries.end} of {totalData.categorized_audios} entries</p>

                    <PaginationNoContainer>
                      <div onClick={HandlePageDecrease}>Prev</div>
                      <div>
                        {/* {
                          ContentToBeShown.ths.map((data, idx)=>{
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
        </TopBottomPadding>
      </PaddedDiv>
    </ReportPageContainer>
  )
}

export default ReportsPage