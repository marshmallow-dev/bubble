/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavBar from '~/components/NavBar'
import Buy from '~/components/Cards/Buy'
export default function Exchange() {
  return (
    <>
        <NavBar/>
    <div className='flex justify-center align-middle content-center mt-7  py-10'>
    <Buy/>
    </div>

  </>
  )
}
