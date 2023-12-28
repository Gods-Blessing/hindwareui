'use client'
import React, { useEffect, useState } from 'react'
import SigninModal from '../SigninModal/SigninModal'
import Header from '../Header/Header'
import { redirect } from 'next/navigation';

function CustomLayout({children}:any){
  const [user, setUser] = useState(true);

  
  useEffect(()=>{
    // console.log("heyy");
  }, [])
  
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default CustomLayout