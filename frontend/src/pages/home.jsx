import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import mainImage from "../assets/mainimage.jpg"

const home = () => {
  return (
    <div>
      <Header />
      <img src={mainImage} alt="mainImage" />
      <Footer />
    </div>
  )
}

export default home