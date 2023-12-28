import { MediScreens } from '@/constants/MediaScreen'
import { COLORS } from '@/constants/colors'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const SigninModalContainer = styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgb(0, 0, 0, 0);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SigninContainer = styled.form`
  width: 30%;
  padding: 30px 20px;
  background-color: ${COLORS.color1};
  border-radius: 10px;
  text-align: center;

  &>img{
    /* margin-bottom: 30px; */
  }

  div{
    input{
      width: 100%;
      border: none;
      border-bottom: 1px solid ${COLORS.Grayish_1};
      background-color: rgba(253, 252, 252, 0.734);
      padding: 10px 7px;
      font-size: 16px;
      margin-top: 20px;
      border-radius: 5px;
      &:focus{
        outline: none;
      }
    }
  }

  @media screen and (max-width: ${MediScreens.Tab}) {
    width: 60%;
  }

  @media screen and (max-width: ${MediScreens.Mobile}) {
    width: 90%;
  }
`

const SigninButton = styled.button`
  font-size: 18px;
  /* font-weight: bold; */
  margin-top: 40px;
  padding: 7px 15px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: rgba(135, 196, 139, 0.5);
  /* box-shadow: 0px 20px 5px -10px rgba(242, 244, 242, 0.5); */
`


function SigninModal() {

  const HandleSubmit = (e:any)=>{
    e.preventDefault();
  }

  return (
    <SigninModalContainer>
        <SigninContainer onSubmit={HandleSubmit}>
          <Image width={200} height={30} src='./Logo_1.svg' alt='Hindware Logo'/>
            <div>
              <input type="text" placeholder='Username...'/>
            </div>

            <div>
              <input type="text" placeholder='Password...'/>
            </div>
          <SigninButton>Login</SigninButton>
        </SigninContainer>
    </SigninModalContainer>
  )
}

export default SigninModal