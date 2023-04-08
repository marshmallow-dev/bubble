/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavBar from '../components/navbar'
import Buy from '~/components/Cards/Buy'
export default function Exchange() {
  return (
    <>
        <NavBar/>
    <div className='flex justify-center align-middle content-center mt-7'>
    <Buy/>
    </div>

  </>
  )
}
