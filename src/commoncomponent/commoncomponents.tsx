import { MediScreens } from "@/constants/MediaScreen";
import { FONTS } from "@/constants/fonts";
import styled from "styled-components";

export const PaddedDiv = styled.div`
    padding: 15px 100px;

    @media screen and (min-width: ${MediScreens.VeryLargeScreen}) {
        max-width: 1166px;
        margin: auto;
    }
    
    @media screen and (max-width: ${MediScreens.Mobile}) {
        padding: 15px 20px;
    }
`;

export const TopBottomPadding = styled.div`
    padding: 30px 0px;
`

export const PaddingForCharts = styled.div`
    padding: 15px;
`

export const LoaderContainer = styled.div`
  /* height: 100px; */
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChartsHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>p{
        /* font-family: ${FONTS.font1}; */
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`