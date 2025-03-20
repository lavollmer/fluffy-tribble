import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import About from "../components/about.jsx"



const about = () => {
  return (
    <div className='bg-custom-primary font-roboto'>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default about