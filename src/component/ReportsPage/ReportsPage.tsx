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
  font-family: Inter;
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
    background: var(--white, #FFF);
    border-radius: 8px 8px 0px 0px;
    font-family: ${FONTS.font1};
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
      border: 1px solid var(--Primary-Yellow, #FAC70F);
      background: var(--Primary-Yellow, #FAC70F);
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
        white-space: nowrap;
        
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

const PaginationContainer = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>p{
    color: var(--Border, #393945);
    font-family: Inter;
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
    border: 1px solid var(--TD-Border, #EDEBEB);
    font-family: Inter;
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
      border-left: 1px solid var(--TD-Border, #EDEBEB);
    }
  }
`
const PaginationNumbers = styled.div<{ $active?: any, $myState?:any}>`
  background-color: ${props => props.$active == props.$myState ? COLORS.yellow : COLORS.white};
`

const ContentToBeShown = [
  {
    th:'Date',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'SKU Name',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'Model Name',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'Problem Type',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'Problem Detail',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'Agent Name',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
  {
    th:'Agent Tone',
    tr:{
      date:'01-12-2023',
      rec:'REC-0111111.mp3',
      modelName:'Lorem Ipsum is simply',
      problemType:'John Doe',
      problemDetail:'Gyser',
      agentName:'Soft',
      agentTone:'Query'
    }
  },
]


function ReportsPage() {
  const [page, setpage] = useState(1);

  const HandlePageIncrease = ()=>{
    if(page < ContentToBeShown.length){
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
                      ContentToBeShown.map((ths, idx)=>{
                        return(
                          <th key={`th-${idx}`}>{ths?.th}</th>
                        )
                      })
                    }
                  </tr>

                  <>
                  {
                    
                    ContentToBeShown.map((trs, idx)=>{
                      // console.log(idx);
                      
                      return(
                        <tr key={`tr-${idx}`}>
                          <td>{trs?.tr.date}</td>
                          <td>{trs?.tr.rec}</td>
                          <td>{trs?.tr.modelName} .... <TdsSmallText>see more</TdsSmallText></td>
                          <td>{trs?.tr.problemType}</td>
                          <td>{trs?.tr.problemDetail}</td>
                          <td>{trs?.tr.agentName}</td>
                          <td>{trs?.tr.agentTone}</td>
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
                      ContentToBeShown.map((data, idx)=>{
                        // console.log(idx)
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