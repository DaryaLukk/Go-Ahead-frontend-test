import React from 'react'
import Form from '../Form/Form'
import Nav from '../Nav/Nav'
import './MainPage.css'

const MainPage = (): JSX.Element => {
  return (
    <>
    <Nav />
      <div className='form-container'>
        <h2>Submit your details</h2>
        <div className='content'>
          <Form />
            <div className='someth'>
              <div className='small'></div>
              <div className='big'></div>
              <div className='big'></div>
              <div className='big'></div>
              <div className='small last'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainPage