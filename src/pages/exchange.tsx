/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavBar from '~/components/NavBar'
import Buy from '~/components/Cards/Buy'
import Sell from '~/components/Cards/Sell'
import Container from '~/components/Cards/Container'
import Tabs from '~/components/Tabs'
import { useRouter } from 'next/router'
export default function Exchange() {
  const router = useRouter()
  const { tx } = router.query
  console.log(tx)

  if(tx==="buy"|| !tx){
    return (
      <>
          <NavBar/>
        <Tabs/>
      <Container>
      <Buy/>
      </Container>
    
  
  
    </>
    ) 
  }
  if(tx==="sell"){
    return (
      <>
          <NavBar/>
        <Tabs/>
      <Container>
        kjsdffhksdjffhskdjffhksdjfjk
      {/* <Sell/> */}
      </Container>
    
  
  
    </>
    )

  }



}

/***
 * Before Sales 
 * Create verification page
 * email Page
 * 1.Check if user is verified
 * 2. If the user is verified allow user to sell
 */

/**
 * Sell Page
 * 1. Once verified
 * 2. get amount to sell
 * 3. select crypto
 * 4. Generate Wallet to recieve crypto
 * 5.Once Crypto is receive transfer to user
 */
