import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'bootstrap'
import Restournt from './component/Restournt/Restournt'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Restournt></Restournt>
      <Header></Header>
    </div>
  )

}

export default App
