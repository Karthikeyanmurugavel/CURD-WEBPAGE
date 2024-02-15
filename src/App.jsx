import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import AddStudent from './AddStudent'
import ViewAll from './ViewAll'
import ViewSingleStudent from './ViewSingleStudent'
import UpdateStudent from './UpdateStudent'
import Errorpage from './Errorpage'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
    <div>
      <Toaster/>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<AddStudent/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        <Route path='/viewsingle/:id' element={<ViewSingleStudent/>}/>
        <Route path='/edit/:id' element={<UpdateStudent/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App