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

export const PaddingForCharts = styled.div`
    padding: 15px;
`

export const ChartsHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>p{
        font-family: ${FONTS.font1};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`