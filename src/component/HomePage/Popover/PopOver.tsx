import { COLORS } from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'
import { ImCross } from "react-icons/im";
import { MediScreens } from '@/constants/MediaScreen';


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
`

const TextContainer = styled.div`
    position: relative;
    width: 50%;
    height: 70%;
    background-color: ${COLORS.white};
    padding: 20px 30px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &>div:first-child{
        position: absolute;
        left: 0px;
        right: 0px;
        padding:0px 30px;
    }

    @media screen and (max-width: ${MediScreens.Mobile}) {
        width: 90%;
    }
`

const HeadingofPopper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ClosePopBtn = styled.div`
    cursor: pointer;
    text-align: end;
`

const TranscriptionText = styled.div`
    margin-top: 50px;
    text-align: justify;
    padding-right: 10px;
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: rgb(241, 241, 241);
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(83, 83, 83, 0.3);
        border-radius: 5px;
    }
`

function PopOver({popOverData, HandleClosePopOver}:any) {
  return (
    <ModalContainer>
        <TextContainer>
            <div>
                <ClosePopBtn onClick={HandleClosePopOver}>
                    <ImCross/>
                </ClosePopBtn>
                <HeadingofPopper>
                    <h4>Transcription :</h4>
                </HeadingofPopper>
            </div>
                <TranscriptionText>{popOverData}</TranscriptionText>
        </TextContainer>
    </ModalContainer>
  )
}

export default PopOver