import Head from 'next/head'
import React from 'react'
import { Footer, Header } from '../../components/common'
import MarketCom from '../../components/markets'

function Markets() {
  return (
    <>
    <Head>
      <title>Verisys</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&family=Montserrat&family=Open+Sans&family=Sacramento&display=swap" rel="stylesheet"></link>
    </Head>
    <main>
      <Header />
      <MarketCom />
      <Footer />
    </main>
  </>
  )
}

export default Markets