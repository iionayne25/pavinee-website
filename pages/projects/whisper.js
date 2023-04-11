import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const index = () => {
  return (
    <>
       <Head>
        <title>Pavinee | Projects</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <div className='main pt-3 pb-10 flex flex-col gap-5 relative'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-2xl font-semibold flex-wrap text-green'>Whisper</p>
          <div className='flex flex-row  items-center gap-3'>
          <Link href="/projects">
              <button
                className="bg-gray-400 px-4 py-1 text-xs border-b-2 border-gray-600/60 hover:scale-110 rounded-full
              hover:bg-black hover:text-greenLight font-medium hover:-translate-y-1"
              >
                Back
              </button>
            </Link>
          </div>   
        </div>
        <div className='flex justify-center items-center'>
          <iframe src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFbxV7U6do&#x2F;8r6bt2ycgHBV1cpy_0erIg&#x2F;view?embed' allowFullScreen="allowFullScreen" allow="fullScreen" className='w-[1100px] h-[500px] rounded-3xl'></iframe>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default index
