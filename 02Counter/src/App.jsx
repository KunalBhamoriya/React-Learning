import { useEffect, useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 15
  const addValue = () => {
    console.log("clicked", counter)
    if(counter >= 20){
      return
    }
    counter = counter+1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log("clicked", counter)
    if(counter == 0) return
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
