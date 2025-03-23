import { createContext, useContext, useState } from 'react'

import './App.css'

const BulbContext = createContext();

function App() {
  const [Bulbon, setbulbon] = useState(false)
  return (
    <>
      <BulbContext.Provider value={{ Bulbon, setbulbon }}>
        <Bulb>
        </Bulb>
      </BulbContext.Provider>
    </>
  )
}
function Bulb() {
  return (
    <>
      <Light></Light>
    </>)
}
function Light() {
  const { Bulbon, setbulbon } = useContext(BulbContext)
  return (
    <div>
      <button onClick={() => setbulbon(Bulbon => !Bulbon)}>Toggle</button>
      <br></br>
      <br></br>
      <div>{Bulbon ? "bulbOn" : "bulboFF"}</div>
    </div>
  )
}

export default App
