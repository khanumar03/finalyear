import React from 'react'
import UnityWEB from './Unity/UnityWEB'
import { Link, Route, Routes } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='w-full h-screen'>
      <Link to="/dashboard/explore/model1">
      <div>model1</div>
      </Link>
      <Link to="/dashboard/explore/model2">
      <div>model2</div>
      </Link>

      {
        <Routes>
          <Route path="/model1" element={ <UnityWEB />} /> 
          <Route path="/model2" element={ <UnityWEB />} /> 
        </Routes>
      }
    </div>
  )
}

export default Explore