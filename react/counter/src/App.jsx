import React from 'react'
import Counter from './pages/counter'
import UserList from './pages/UserList'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './pages/ContactForm'

const App = () => {
  
  return (
    <>
{/*       
      <Counter />
      <UserList /> */}
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
      <ContactForm/>
    </>
  )
}

export default App