import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import BLogs from './components/BLogs'
import Create from './components/Create'
import Detail from './components/Detail'
import { useGetblogQuery } from './features/blog'

const App = () => {
  const {data} = useGetblogQuery()
  return (
    <div>
      <Routes>
        <Route path='/' element={ <BLogs /> } />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='/create' element={ <Create /> } />
      </Routes>
    </div>
  )
}

export default App