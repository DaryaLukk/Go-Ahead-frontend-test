import React from 'react'
import Form from '../Form/Form'
import './MainPage.css'

const MainPage = (): JSX.Element => {
  return (
    <>
    <div className='header'>
        <div className='main-link'></div>
        <div className='links'>
          <div className='link'></div>
          <div className='link'></div>
          <div className='link'></div>
        </div>
      </div>
      <div className='body'>
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