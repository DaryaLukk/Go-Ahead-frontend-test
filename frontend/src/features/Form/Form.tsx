import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
      <form className='form'>
        <div className='text'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name'></input>
        </div>
        <div className='text'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email'></input>
        </div>
        <div className='checkbox'>
          <input type='checkbox' id='flag' className='custom-input'></input>
          <label htmlFor='flag' className='custom-label'>I want to receive updates via email.</label>
        </div>
        <button type='submit'>Start the Course</button>
      </form>
    </>
  )
}

export default Form