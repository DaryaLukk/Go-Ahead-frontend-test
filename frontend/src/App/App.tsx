import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/MainPage/MainPage';
import Success from '../features/Success/Success';
import './App.css'

function App (): JSX.Element {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/success' element={<Success/> }></Route>
      </Routes>
    </div>
  )
}

export default App
