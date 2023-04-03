import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)

  const [nameCheck, setNameCheck] = useState(true)
  const [emailCheck, setEmailCheck] = useState(true)

  const navigate = useNavigate()

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
      // отправка формы на сервер

      // fetch('http://localhost:4000/api/auth/sign-up', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     checked
      //   })
      // }).then((res) => res.json())

      //без сервера делаем проверку на заполнение полей, если все хорошо перенаправляем на заглушку

      if(name === '') {
        setNameCheck(false)
      } else if(email === '') {
        setEmailCheck(false)
      } else {
        navigate('/success')
      }
  }

  return (
    <>
      <form className='form' onSubmit={submitForm}>
        <div className={nameCheck ? 'text' : 'text errorName'}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={(e) => { setName(e.target.value) }}></input>
          <div>
            <div className='img'></div>
            <div>Please provide a name!</div>
          </div>
        </div>
        <div className={emailCheck ? 'text' : 'text errorEmail'}>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' onChange={(e) => { setEmail(e.target.value) }}></input>
          <div>
            <div className='img'></div>
            <div>Please provide email!</div>
          </div>
        </div>
        <div className='checkbox'>
          <input type='checkbox' id='flag' className='custom-input' checked={checked} onChange={() => { setChecked(!checked) }}></input>
          <label htmlFor='flag' className='custom-label'>I want to receive updates via email.</label>
        </div>
        <button type='submit'>Start the Course</button>
      </form>
    </>
  )
}

export default Form
