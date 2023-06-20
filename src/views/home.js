import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Identity Liaison</title>
        <meta property="og:title" content="International Identity Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
