import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from './compnenets/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {dispatchApi} from './reduxKIt/features/storeFetching'
const App = () => {
const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(dispatchApi())
  })
  return (
    <div> 
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
