import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from './pages/Layouts'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (

  
      <Routes>
        
        <Route element={<Layouts />} >
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
        </Route>
      </Routes>


  )
}

export default App