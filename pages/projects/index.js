import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'
const index = () => {
  return (
    <>
      <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header/>
    </>
  )
}

export default index
