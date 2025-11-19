import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-amber-50 text-black p-4 rounded-xl'>Test</h1>
      <Card username="John Doe"/>
      <Card username="Jane Doe"/>
    </>
  )
}

export default App
