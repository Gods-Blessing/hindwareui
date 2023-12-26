'use client'
import { PaddedDiv } from '@/commoncomponent/commoncomponents'
import { MediScreens } from '@/constants/MediaScreen'
import { COLORS } from '@/constants/colors'
import { FONTS } from '@/constants/fonts'
import React, { useEffect, useState } from 'react'
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
        color: ${COLORS.color1};
        /* font-family: Inter; */
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        white-space: nowrap;
        
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
    color: ${COLORS.color3};
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

  useEffect(()=>{
    document.getElementById(`id-${page}`)?.scrollIntoView()
  }, [page])


  return (
    <ReportPageContainer>
      <PaddedDiv>
        <ReportPageHeading>Reports</ReportPageHeading>

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
                <table>
                  <tr>
                    {
                      ContentToBeShown.ths.map((ths, idx)=>{
                        return(
                          <th key={`th-${idx}`}>{ths}</th>
                        )
                      })
                    }
                  </tr>

                  <>
                  {
                    
                    ContentToBeShown.ths.slice(0, 15).map((trs, idx)=>{
                      // console.log(idx);
                      
                      return(
                        <tr key={`tr-${idx}`}>
                          <td>{ContentToBeShown.trs[0].tr.date}</td>
                          <td>{ContentToBeShown.trs[0].tr.SKUName}</td>
                          <td>{ContentToBeShown.trs[0].tr.modelName}</td>
                          <td>{ContentToBeShown.trs[0].tr.problemType}</td>
                          <td>{ContentToBeShown.trs[0].tr.problemDetail}</td>
                          <td>{ContentToBeShown.trs[0].tr.agentName}</td>
                          <td>{ContentToBeShown.trs[0].tr.agentTone}</td>
                          <td>{ContentToBeShown.trs[0].tr.suggestionToCustomer}</td>
                          <td>{ContentToBeShown.trs[0].tr.suggestionToAgent}</td>
                          <td>{ContentToBeShown.trs[0].tr.customerName}</td>
                          <td>{ContentToBeShown.trs[0].tr.customerLocation}</td>
                          <td>{ContentToBeShown.trs[0].tr.pinCode}</td>
                          <td>{ContentToBeShown.trs[0].tr.customerTone}</td>
                          <td>{ContentToBeShown.trs[0].tr.defectivePart}</td>
                          <td>{ContentToBeShown.trs[0].tr.suggestionToRnD}</td>
                          <td>{ContentToBeShown.trs[0].tr.rca}</td>
                          <td>{ContentToBeShown.trs[0].tr.proposedResolution}</td>
                          <td>{ContentToBeShown.trs[0].tr.callScore}</td>
                        </tr>
                        )
                      })
                    }
                  </>
                </table>

              </TableContainer>

              <PaginationContainer>
                <p>Showing 1 to 15 of 57 entries</p>

                <PaginationNoContainer>
                  <div onClick={HandlePageDecrease}>Prev</div>
                  <div>
                    {
                      ContentToBeShown.ths.map((data, idx)=>{
                        console.log(idx)
                        return(
                          <>
                          <PaginationNumbers onClick={()=>HandleSetPageNo(idx + 1)} key={`page-${idx}`} id={`id-${idx + 1}`} $active={idx + 1} $myState={page}>{idx + 1}</PaginationNumbers>
                          </>
                        )
                      })
                    }
                  </div>
                  <div onClick={HandlePageIncrease}>Next</div>
                </PaginationNoContainer>
              </PaginationContainer>
            </div>
          </TableAndDataContainer>
      </PaddedDiv>
    </ReportPageContainer>
  )
}

export default ReportsPage