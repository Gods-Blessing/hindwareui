'use client'
import React, { useState } from 'react'
import { PaddedDiv } from '@/commoncomponent/commoncomponents'
import { COLORS } from '@/constants/colors'
import { FONTS } from '@/constants/fonts'
import Image from 'next/image'
import Link from 'next/link'
// import styled
import styled from 'styled-components'
import { MediScreens } from '@/constants/MediaScreen'

const HeaderContainer = styled.nav`
    position: fixed;
    top: 0px;
    /* width: 1366px; */
    right: 0px;
    left: 0px;

`
const HeaderLogo = styled(Image)`
    width: 138px;
    height: 30px;

    @media screen and (max-width: ${MediScreens.Mobile}) {
        width: 60px;
    }
`

const HeadrContainer2 = styled.div`
        background: ${COLORS.color1};
        border-bottom: 1px solid rgba(56, 69, 74, 0.50);
    &>div{
        &>div{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`

const HeaderContainer3 = styled.div`
    /* width: 1366px; */
    background: ${COLORS.white};
    box-shadow: 0px 2px 4px 0px rgba(15, 34, 58, 0.12);
    &>div{
        &>div{
            display: flex;
            align-items: center;
            /* height: 40px; */
            flex-shrink: 0;
            &>div:first-child{
                margin-right: 50px;
                color: ${COLORS.color1};
                font-family: ${FONTS.font1};
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            &>div{
                margin-right: 30px;
                
                &>a{
                    display: block;
                    text-decoration: none;
                    color: ${COLORS.color1};
                    font-family: ${FONTS.font1};
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;            
                }
            }
        }
    }

`

const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    @media screen and (max-width: ${MediScreens.Mobile}) {
        gap: 10px;
    }
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    &>div{
        display: flex;
        align-items: center;
        justify-content: center;

        &>input{
            padding: 5px 10px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: ${MediScreens.Mobile}) {
        gap: 10px;
        &>div{
            &>input{
                width: 150px;
                margin-right: 5px;
            }
        }
    }
`

const AvatarImageContainer = styled.div`
    width: 30px;
    height: 30px;
    &>img{
        border-radius: 3px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

function Header() {
    const [showInput, setShowInput] = useState(false);

    const HandleShowInput = ()=>{
        setShowInput(!showInput)
    }

  return (
    <HeaderContainer>
        <HeadrContainer2>
                <PaddedDiv>
                    <div> 
                        <Link href='/'>
                            <HeaderLogo width={138} height={30} src='/Logo_1.svg' alt='logo'/>
                        </Link>

                        <ImagesContainer>
                            {/* <IconsContainer>
                                <div>
                                    <Image width={17} height={17} src='/alerticon.svg' alt='alerticon'/>
                                </div>
                                <div>
                                    {
                                        showInput && <input type="text" />
                                    }
                                    <Image onClick={HandleShowInput} width={17} height={17} src='/searchicon.svg' alt='searcicon'/>
                                </div>
                            </IconsContainer> */}

                            <AvatarImageContainer>
                                <Image width={30} height={30} src='/avatar.png' alt='avatar'/>
                            </AvatarImageContainer>
                        </ImagesContainer>
                    </div>
                </PaddedDiv>
        </HeadrContainer2>

        <HeaderContainer3>
            <PaddedDiv>
                <div>
                    <div>Dashboard</div>
                    <div>
                        <Link href='/'>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link href='/reports'>
                            Reports
                        </Link>
                    </div>
                </div>
            </PaddedDiv>
        </HeaderContainer3>
    </HeaderContainer>
  )
}

export default Header