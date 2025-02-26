import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [Counter, setCounter] = useState(15)

  //let Counter = 15

  const addValue =() => {
    //Counter = Counter +1
    setCounter(Counter +1 )

  }

  const removeValue =() => {
    setCounter(Counter -1)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value :{Counter}</h2>

     <button
     onClick={addValue}>
      Add Value{Counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value{Counter}</button>
     <p>footer: {Counter}</p>
    </>
  )
}

export default App
