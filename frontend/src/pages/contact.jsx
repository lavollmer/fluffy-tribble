import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Form from "../components/form.jsx"


const contact = () => {
  return (
    <div className='bg-custom-primary font-roboto'>
      <div>
        <Header />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default contact